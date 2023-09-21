/* eslint-disable react/no-unknown-property */

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index , title , icon }) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shawdow-card'>

        <div 
          options={{
            max:45,
            scale: 1,
            speed: 450
        }}
        className='bg-[#172554] rounded-[20px] py-5 px-12 min-h-[280px] 
        flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-[#6ee7b7] text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>
      <motion.p variants={fadeIn("", "",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Im a student dreaming and focusing to become a software developer with experiences
        from SCB TECH X , a digital company that creates OPEN APIs
        and other services for SCB Siam Commercial Bank. I am familiar with JavaScript, React.js
        ,TypeScript ,Node.js ,HTML and CSS as I have worked on 
        a Time Tracking Project created for the ease of routine work for the SE team. 
        Ive also had some experience with Onboarding APIs editing consents, 
        consumer profiles and etc. Im a fast learner, hard worker and ready to put up with whatever challenging tasks I face.
        I believe this is how I improve myself on my journey to become a great and consistent Software developer.
        I hope we can work together as Im sure I can provide useful solutions to problems 
        and bring creative ideas to Lifeee.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index ) => (
          <ServiceCard key={service.title} index={index} {...service}   />
        ))}

      </div>

    </>
  )
}

export default SectionWrapper( About, "about")