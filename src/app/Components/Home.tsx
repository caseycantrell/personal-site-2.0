import Socials from "./UI/Socials"
import { motion, AnimatePresence } from "framer-motion"
import { fadeInTransition, slideLeft, slideRight } from "./UI/Animations"

interface HomeProps {
  onClick: (index: number) => void
}
    
const Home = ({ onClick }: HomeProps) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeInTransition} 
        className="w-screen lg:w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
      <div className="flex flex-col col-span-5 justify-center items-start ml-12 lg:ml-64 mt-16 lg:mt-0">
        <motion.p     
          initial="initial"
          animate="animate"
          variants={slideLeft} 
          className="text-7xl lg:text-9xl font-extrabold">Casey</motion.p>
        <motion.p 
          initial="initial"
          animate="animate"
          variants={slideLeft} 
          className="text-7xl lg:text-9xl font-extrabold lg:-mt-6 lg:ml-4">Cantrell</motion.p>
        <motion.p 
          initial="initial"
          animate="animate"
          variants={slideRight} 
          className="text-xl lg:text-2xl lg:-mt-4 ml-8 lg:ml-64 font-bold">Full-Stack Web Developer</motion.p>
      </div>
      <Socials />
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
          <button onClick={() => onClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Projects</button>
          <button onClick={() => onClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
    
export default Home