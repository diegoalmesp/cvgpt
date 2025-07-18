import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import gitImage from '../assets/tech/github.png';
import linkedInImage from '../assets/tech/linkedin.png';
import resumeImage from '../assets/tech/resume.png';
import fullstackpdf from '../assets/fullstack.pdf';
import CoffeeMakerCanvas from './canvas/CoffeeMaker';
import SocialLink from './common/SocialLink';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_k2xrewg', // process.env.REACT_APP_EMAILJS_USERID,
        'template_f37gkpk', // process.env.REACT_APP_EMAILJS_TEMPLATEID,
        {
          name: form.name,
          to_name: 'Contacto web Diegol',
          email: form.email,
          message: form.message,
        },
        'jlNRBnQaYTpUXjpZM', // process.env.REACT_APP_EMAILJS_RECEIVERID
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert('Something went wrong. Please try again later.');
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Let&apos;s have a coffee &#8594;
        </p>
        <h3 className={styles.sectionHeadText}>Contact me</h3>
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <SocialLink
            href="https://github.com/diegoalmesp"
            icon={gitImage}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/diego-almiron-b385024b/"
            icon={linkedInImage}
            label="LinkedIn"
          />
          <SocialLink href={fullstackpdf} icon={resumeImage} label="Resume" />
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <EarthCanvas /> */}
        <CoffeeMakerCanvas />
      </motion.div>
      <small className="absolute bottom-5 right-5 text-gray-500 text-[8px]">
        © {new Date().getFullYear()} 3d model by:
        https://sketchfab.com/Ryan_Nein
      </small>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
