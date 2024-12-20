import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

//915eff
//<p className="flex flex-row justify-end sm:text-yellow-400 my-5 lg:text-yellow-400">"Try moving the galaxy"</p>

//Remove gradient circle line div for now
//<div className='w-4 h-4 rounded-full bg-[#facc15]'/>
//<div className='w-1 sm:h-80 h-40 violet-gradient'/>

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5"></div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-[#facc15] `}>
                        Setthanan <span className="text-[#facc15]">Pheno</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText} mt-3 drop-shadow-3xl bg-clip-text text-amber-400 backdrop-blur-[2px] backdrop-brightness-80  backdrop-contrast-120  `}
                    >
                        I am a self-motivated engineering student,{" "}
                        <br className="sm:block hidden" />
                        committed to evolving into a highly{" "}
                        <br className="sm:block hidden" /> skilled software
                        engineer.
                    </p>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.dev
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
