/* eslint-disable react/no-unknown-property */

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn , textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'

const ServiceCard = ({index , title , icon }) => {
    return(
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right","spring",0.5 * index, 0.75)} 
                className='w-full bg-neutral-500/10 hover:bg-neutral-600/10 p-[1px] rounded-[20px] shadow-card'>

                <div 
                    options={{
                        max:15,
                        scale: 1,
                        speed: 150
                    }}
                    className='bg-neutral-500/10 hover:bg-neutral-600/10 backdrop-blur-md rounded-[20px] py-5 px-12 min-h-[280px] 
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
                <h2 className={styles.sectionHeadText}>Overview</h2>

            </motion.div>
            <motion.p variants={fadeIn("", "",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                I am on the path of becoming a proficient software developer.
                During my time at SCB TECH X, a digital enterprise specializing in OPEN APIs and services for SCB Siam Commercial Bank, 
                I have enhanced my skills in JavaScript, React, TypeScript, HTML, and CSS both on the Frontend and Backend. 
                My practical experience includes meaningful contributions to a Time Tracking Project, optimizing the workflow for our esteemed software engineering team. 
                Additionally, I have actively participated in projects involving Onboarding APIs and Company Gateways. My approach is characterized 
                by a keen aptitude for rapid assimilation of new concepts and a proactive stance towards challenging assignments. 
                I eagerly anticipate the opportunity to channel my problem-solving skills and creative mindset 
                to bring new Ideas to life at the same time constantly improve myself.

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
