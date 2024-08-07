import Socials from "./UI/Socials"
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInTransition } from "./UI/Animations"

interface SkillsProps {
  handleNavClick: (index: number) => void
}

const frontEndSkills: string[] = ["React", "Next.js", "Vue", "JavaScript", "TypeScript", "HTML5", "CSS3+", "SASS"]
const backEndSkills: string[] = ["Rails", "Node.js", "Ruby", "Python", "SQL", "Postgres", "Nginx"]
const toolsSkills: string[] = ["Git", "GitHub", "Figma", "Jira"]
const testingSkills: string[] = ["RSpec", "Jest", "Agile", "Scrum"]
  
const Skills = ({ handleNavClick }: SkillsProps) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeInTransition}  
        className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex flex-col justify-center col-span-5 gap-y-8 lg:gap-y-16 pl-6 lg:pl-32">
          <div className="grid grid-cols-2 gap-y-0 lg:gap-y-16 lg:flex lg:flex-col">
            <div className="flex flex-col lg:flex-row items-start lg:items-end">
              <p className="font-bold lg:font-extrabold text-2xl lg:text-4xl mr-1 ml-2 lg:ml-0">Frontend:</p>
              {frontEndSkills.map((skill, index) => (
                <p key={index} className="text-md lg:text-xl font-semibold ml-6 lg:ml-1">{skill}<span className="hidden lg:inline">{index !== frontEndSkills.length - 1 && ","}</span></p>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-end">
              <p className="font-bold lg:font-extrabold text-2xl lg:text-4xl mr-1 ml-2 lg:ml-0">Backend:</p>
              {backEndSkills.map((skill, index) => (
                <p key={index} className="text-md lg:text-xl font-semibold ml-6 lg:ml-1">{skill}<span className="hidden lg:inline">{index !== backEndSkills.length - 1 && ","}</span></p>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
            <p className="font-bold lg:font-extrabold text-2xl lg:text-4xl mr-1">Tools & Version Control:</p>
              {toolsSkills.map((skill, index) => (
                <p key={index} className="text-md lg:text-xl font-semibold ml-6 lg:ml-1">{skill}<span className="hidden lg:inline">{index !== toolsSkills.length - 1 && ","}</span></p>
              ))}
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
            <p className="font-bold lg:font-extrabold text-2xl lg:text-4xl mr-1">Testing & Methodologies:</p>
              {testingSkills.map((skill, index) => (
                <p key={index} className="text-md lg:text-xl font-semibold ml-6 lg:ml-1">{skill}<span className="hidden lg:inline">{index !== testingSkills.length - 1 && ","}</span></p>
              ))}
          </div>
      </div>
      <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-extrabold">
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">HOME</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">ABOUT</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">PROJECTS</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">CONTACT</motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Skills