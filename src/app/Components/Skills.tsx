import Socials from "./UI/Socials"
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInTransition } from "./UI/Animations"

interface SkillsProps {
  handleNavClick: (index: number) => void
}

const skillGroups: { label: string, skills: string[] }[] = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Ruby", "SQL", "HTML", "CSS"] },
  { label: "Backend", skills: ["Django", "FastAPI", "Flask", "Celery", "Rails", "Node.js"] },
  { label: "Frontend", skills: ["React", "Next.js", "Vue", "Tailwind", "SASS"] },
  { label: "Data & Geospatial", skills: ["PostgreSQL", "Redis", "ArcGIS"] },
  { label: "Infrastructure", skills: ["Kubernetes", "Docker", "AWS", "Nginx", "Heroku"] },
  { label: "Tooling & Testing", skills: ["Git", "GitHub", "Sentry", "Jira", "Figma", "RSpec", "Jest"] },
]

const Skills = ({ handleNavClick }: SkillsProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        variants={fadeInTransition}
        className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex flex-col justify-center col-span-5 pl-6 pr-4 lg:pl-32 lg:pr-8">
          <div className="grid grid-cols-2 gap-y-6 lg:gap-y-8 lg:flex lg:flex-col">
            {skillGroups.map(({ label, skills }) => (
              <div key={label} className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-end">
                <p className="font-bold lg:font-extrabold text-xl lg:text-4xl mr-1 ml-2 lg:ml-0 lg:whitespace-nowrap">{label}:</p>
                {skills.map((skill, index) => (
                  <p key={skill} className="text-md lg:text-xl font-semibold ml-6 lg:ml-1">{skill}<span className="hidden lg:inline">{index !== skills.length - 1 && ","}</span></p>
                ))}
              </div>
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
