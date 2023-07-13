import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn , textVariant } from '../utils/motion'

//data of the projects are in the file constants
//Note that the data of the project can be changed in the constants file
//be sure all elements passed in as parameters are properly filled

const ProjectCard = ( { index , name , description , tags , image , source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#172554] p-5 rounded-2xl sm:w-[300px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
              onClick={() => window.open
              (source_code_link,"_blank")}
              className="black-gradient w-10 h-10
              rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />

            </div>
          </div>
        </div>

        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>

      </Tilt>
    </motion.div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("","",0.1,1)} 
          className='mt-3 text-secodnary text-[17px] max-w-3xl leading-[30px]' 
        >
          These following projects showcases the skills and experience I have faced
          and accomplished both with the help of my mentors and on my own throughout my whole Internship period.
          The ability to manage time and projects effectively, at the same time complete them using 
          different technologies that requires re-learning ability consistently.
        </motion.p>

      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index) => (
          <ProjectCard key={`project-${index} `} {...project} index={index} />
        ))}

      </div>
      
    </>
  )
}

export default SectionWrapper(Works , "")