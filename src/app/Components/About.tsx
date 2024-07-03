import Socials from "./UI/Socials"
import Image from "next/image"
import selfPic from '../../../public/images/self.jpg'
import { motion, AnimatePresence } from "framer-motion"
import { fadeInTransition } from "./UI/Animations"

interface AboutProps {
  handleNavClick: (index: number) => void
}

const About = ({ handleNavClick }: AboutProps) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={fadeInTransition}  
        className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex flex-col col-span-5 px-8 lg:pl-32 justify-center">
          <div className="flex flex-col lg:flex-row items-center mb-6 mt-4 lg:mt-0 ml-0 lg:ml-1">
            <Image src={selfPic} width={100} height={100} alt='Self Pic' placeholder="blur" className="rounded-md shadow-xl border border-gray-400" />
            <p className="text-4xl lg:text-5xl font-extrabold lg:ml-6 mt-4 lg:mt-0 break-all">It&apos;s ya boi.</p>
          </div>
          <div className="">
            <p className="flex text-sm lg:text-lg font-semibold">
              As a former musician turned software engineer, I bring a distinctive perspective to problem-solving, 
              finding rhythm and flow in even the most complex challenges. Swapping melodies for algorithms, 
              I thrive on creating harmonious solutions and orchestrating innovative projects.
            </p>
            <p className="flex mt-8 text-sm lg:text-lg font-semibold">
              From the world of music to the realm of software engineering, 
              my journey has been a unique blend of creativity and logic. 
              While my days of live performances are behind me, I now orchestrate code with the same passion.
            </p>
          </div>
        </div>
        <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-extrabold">
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">HOME</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">SKILLS</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">PROJECTS</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">CONTACT</motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
  
export default About