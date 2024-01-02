import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, my name is Yepu, and I am a student at Monash University, studying Engineering and Commerce, specializing in Software Engineering and Business Analysis. I have worked on multiple software engineering projects, both in small groups and in large teams of up to 20 people. In one such project, I operated as the project manager for a machine learning web application. Outside of my university experience, I have also worked at KPMG as a Technology Consultant in the Oracle team. Additionally, I have several volunteering experiences, such as with ACYA, where I served as the Career Officer, helping to deliver large-scale networking events. I was also the Communications Team Engagement Lead at Govhack. Lastly, I am the lead coach for badminton at Trinity Grammar School.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key={service.title} index =
          {index} {...service} />
        ))}
      </div>
    </>
  )
}
export default SectionWrapper(About, "about");