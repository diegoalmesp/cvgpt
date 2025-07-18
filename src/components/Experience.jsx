import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain scale-150"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 text-justify break-all"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

ExperienceCard.propTypes = propTypes;

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
        <span className="mt-10 text-gray-500 text-center text-sm">
          Note: For older experience please refer to my{' '}
          <a
            href="https://www.linkedin.com/in/diego-almiron-b385024b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            LinkedIn profile
          </a>
          .
        </span>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
