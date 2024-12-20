import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn , textVariant  } from '../utils/motion'
import { testimonials } from '../constants'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { TextShimmer } from './ui/text-shimmer'

//Note that data of Testimonials can be changed in constants files

const FeedbackCard = ({index, testimonial , name , designation , company , image} ) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className='bg-transparent border border-neutral-400 hover:bg-primary p-10 rounded-3xl xs:w-[320px] w-full'
    >
        <p className='text-white font-black text-[48px]'>"</p>

        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <img
                    src={image}
                    alt={`feedback_by-${name}`}
                    className='w-10 h-10 rounded-full object-cover'
                />
            </div>
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className={`mt-12 bg-neutral-500/10 hover:bg-neutral-600/10 rounded-[20px]`}>
            <div
                className={` rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>

                    <div
                        className={cn(
                            "inline-block py-1 px-3 group rounded-full border border-white bg-neutral-50 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-950 dark:hover:bg-neutral-950",
                        )}
                    >
                        <AnimatedShinyText className={`${styles.sectionSubText} font-semibold text-sm xs:text-sm md:text-lg lg:text-lg`}>
                            <TextShimmer duration={1.9}>
                                What others say
                            </TextShimmer>
                        </AnimatedShinyText>
                    </div>
                    {/* <p className={styles.sectionSubText}>What others say</p> */}
                    <h2 className={styles.sectionHeadText}>Testimonials</h2>
                </motion.div>
            </div>

            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard 
                        key={testimonial.name} 
                        index={index} 
                        {...testimonial} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, " ");

