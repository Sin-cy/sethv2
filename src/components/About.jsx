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
                My journey began in 2022 while studying Avionics Engineering and found passion for programming and technology. Since then, 
                I've been dedicated to honing my skills and by building as many projects as I can.
                Alongside coding, I create content around tech, productivity, sharing my experiences as I navigate the world of development.
                Explore my work and join me as I continue to grow and push the boundaries of what's possible in tech.

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
