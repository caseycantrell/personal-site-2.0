import Image from "next/image"
import Socials from "./UI/Socials"
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInTransition } from "./UI/Animations"

interface SkillsProps {
  onClick: (index: number) => void
}
  
const Skills = ({ onClick }: SkillsProps) => {
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
              <p className="font-extrabold text-2xl lg:text-4xl mr-1 ml-2 lg:ml-0">Frontend:</p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">React<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">Next.js<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">JavaScript<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">HTML5<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">CSS3+<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">SASS</p>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-end">
              <p className="font-extrabold text-2xl lg:text-4xl mr-1 ml-2 lg:ml-0">Backend:</p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">Ruby/Rails<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">Node.js<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">Python<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">SQL<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">Postgres<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-6 lg:ml-1">Nginx</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
            <p className="font-extrabold text-2xl lg:text-4xl mr-1">Tools & Version Control:</p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Git<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">GitHub<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Figma<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Jira</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
            <p className="font-extrabold text-2xl lg:text-4xl mr-1">Testing & Methodologies:</p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Rspec<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Jest<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Agile<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-6 lg:ml-1">Scrum</p>
          </div>
      </div>
      <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button>
          <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Projects</button>
          <button onClick={() => onClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Skills