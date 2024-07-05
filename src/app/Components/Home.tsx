import Socials from "./UI/Socials"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInTransition, slideLeft, slideRight } from "./UI/Animations"

interface HomeProps {
  handleNavClick: (index: number) => void
}
    
const Home = ({ handleNavClick }: HomeProps) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeInTransition} 
        className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
      <div className="flex flex-col col-span-5 justify-center items-center lg:items-start lg:ml-64 mt-16 lg:mt-0">
        <motion.p     
          initial="initial"
          animate="animate"
          variants={slideLeft} 
          className="text-7xl lg:text-9xl font-extrabold">Casey</motion.p>
        <motion.p 
          initial="initial"
          animate="animate"
          variants={slideLeft} 
          className="text-7xl lg:text-9xl font-extrabold lg:-mt-6 ml-0 lg:ml-4">Cantrell</motion.p>
        <motion.p 
          initial="initial"
          animate="animate"
          variants={slideRight} 
          className="text-xl lg:text-2xl lg:-mt-3 ml-0 lg:ml-52 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Full-Stack Software Engineer</motion.p>
      </div>
      <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-extrabold">
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">ABOUT</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">SKILLS</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">PROJECTS</motion.button>
          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleNavClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">CONTACT</motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
    
export default Home