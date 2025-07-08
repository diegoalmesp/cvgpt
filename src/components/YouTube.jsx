import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const YouTube = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Content creation</p>
        <h2 className={styles.sectionHeadText}>YouTube</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] text-justify"
      >
        I made this channel to have fun and learn new things. And in the process
        to share my knowledge with the world. I hope you like it!{' '}
        <span
          role="img"
          aria-label="heart"
          className="inline-block align-text-bottom text-red-500 ml-1"
        >
          ❤️
        </span>
        <iframe
          width="auto"
          // height="315"
          src="https://www.youtube.com/embed/CemN3xaOg3U?si=gKFrWCvLVSDT7f2p"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="m-auto w-full md:w-auto md:h-[315px] h-[200px] aspect-video rounded-lg mt-8"
        ></iframe>
      </motion.p>
    </>
  );
};

export default SectionWrapper(YouTube, 'about');
