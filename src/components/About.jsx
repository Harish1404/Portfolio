import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './hoc';

const About = () => {
  const ServiceCard =({index, title, icon}) =>{
    return(
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] flex py-5 px-12 min-h-[280px] 
          justify-evenly items-center flex-col' 
          options={{max:45,scale:1,speed:500}}>
            <img src={icon} alt={title} className='object-contain w-16 h-16' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>

      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify' variants={fadeIn("","",0.1,1)}>
      I’m Harish, an AI/ML engineer and full-stack developer with a strong foundation in Python, MySQL, and JavaScript frameworks like React.js 
      and Next.js. I have experience building innovative projects such as an AI-powered chatbot for trauma assistance, 
      a loan approval prediction model, and a Python tutoring platform with interactive features. 
      My skills in data visualization tools like Tableau and Power BI, combined with my knowledge of 
      Agile methodologies, enable me to create impactful, scalable solutions. Let’s collaborate to transform 
      ideas into intelligent, user-focused digital experiences!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-around'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} 
          index={index}{...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")