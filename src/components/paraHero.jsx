// import { motion } from 'framer-motion'
import { styles } from '../styles'
import Position  from './Position'

const ParaHero = () => {

    return (
        <section className=" relative w-full h-screen mx-auto mt-20 ">

            <h1 className={`${styles.heroHeadText} text-[#facc15] absolute z-10 w-full text-center`}
                style={{ top: '35%', transform: 'translateY(-50%)' }}
            >
                    Seth <span className='text-[#facc15] ml-3 md:ml-4 '>Phaeno</span>
                    <Position />
            </h1>
            <div className="parallax_content absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 ">
                <div>

                    {/* <p className={`${styles.heroSubText} mt-16 drop-shadow-3xl bg-clip-text text-amber-400 backdrop-blur-[2px] backdrop-brightness-30  backdrop-contrast-120 `}> */}
                    {/*     I am a self-motivated engineering student, <br className='sm:block hidden'/>  */}
                    {/* committed to evolving into a highly <br className='sm:block hidden'/> skilled software engineer.  */}
                    {/* </p> */}

                </div>
            </div>


            <div className="parallax">
                <img className="parallax_heroMainBg" src="./pv3/herobgfinal.png" alt="" />
                <img className="parallax_rock1" src="./pv3/rock1.png" alt="" />
                <img className="parallax_rock2" src="./pv3/rock2.png" alt="" />
                <img className="parallax_rock3" src="./pv3/rock3.png" alt="" />
                <img className="parallax_baserock" src="./pv3/baserock.png" alt="" />
                <img className="parallax_toprock" src="./pv3/toprock.png" alt="" />
                <img className="parallax_character" src="./pv3/character.png" alt="" />
                <img className="parallax_haloring" src="./pv3/haloring.png" alt="" />
            </div>


            {/* <div className='parallax_button absolute xs:bottom-10 bottom-32  md:bottom-28 lg:bottom-28 xl:bottom-28 w-full flex justify-center items-center'> */}
            {/*     <a href='#about'> */}
            {/*         <div className='w-[35px] h-[60px] rounded-3xl border-4 text-[#facc15] flex justify-center items-start p-2'> */}
            {/*             <motion.div  */}
            {/*                 animate={{y : [0,24,0]}} */}
            {/*                 transition={{duration: 1.5,repeat: Infinity, repeatType: 'loop' }} */}
            {/*                 className="w-3 h-3 rounded-full bg-secondary mb-1" */}
            {/*             /> */}
            {/*         </div> */}
            {/*     </a> */}
            {/* </div> */}

        </section >
    )
} ;

export default ParaHero
