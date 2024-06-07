import { motion } from 'framer-motion'
import { styles } from '../styles'


const ParaHero = () => {

    return (
        <section className="parallax ">

            <div className="parallax_content absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 ">
                <div>
                    <h1 className={`${styles.heroHeadText} text-[#facc15] `}>
                        Setthanan <span className='text-[#facc15]'>Pheno</span>
                    </h1>

                    <p className={`${styles.heroSubText} mt-3 drop-shadow-3xl bg-clip-text text-amber-400 backdrop-blur-[2px] backdrop-brightness-80  backdrop-contrast-120  `}>
                        I am a self-motivated engineering student, <br className='sm:block hidden'/> 
                    committed to evolving into a highly <br className='sm:block hidden'/> skilled software engineer. 
                    </p>

                </div>
            </div>


            <img className="parallax_heroMainBg" src="./pv3/herobgfinal.png" alt="" />
            <img className="parallax_rock1" src="./pv3/rock1.png" alt="" />
            <img className="parallax_rock2" src="./pv3/rock2.png" alt="" />
            <img className="parallax_rock3" src="./pv3/rock3.png" alt="" />
            <img className="parallax_baserock" src="./pv3/baserock.png" alt="" />
            <img className="parallax_toprock" src="./pv3/toprock.png" alt="" />
            <img className="parallax_character" src="./pv3/character.png" alt="" />
            <img className="parallax_haloring" src="./pv3/haloring.png" alt="" />


            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.dev 
                            animate={{y : [0,24,0]}}
                            transition={{duration: 1.5,repeat: Infinity, repeatType: 'loop' }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>

        </section >
    )
} ;

export default ParaHero
