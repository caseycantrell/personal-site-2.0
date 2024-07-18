import Image from "next/image"
import { motion } from 'framer-motion'
import { hoverTransition } from "./Animations"

const containerVariants = {
  initial: {
    x: 100
  },
  animate: {
    x: 0,
    transition: {
      staggerChildren: -0.2,
      delayChildren: 0.5
    }
  }
}

const fadeIn = {
  initial: { opacity: 0, x: 20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.5,
      opacity: { 
        duration: 1, ease: "easeInOut",
        delay: 0.2
      }
    }
  }
}

const Socials = () => {
  return (
    <motion.div  initial="initial"
    animate="animate"
    variants={containerVariants} className="absolute top-4 right-4 hidden lg:flex flex-row items-center gap-x-3.5">
      <motion.a variants={fadeIn} key={1} whileHover={{ scale: 1.125 }} transition={hoverTransition} href={"mailto:cantrellcasey@gmail.com"} className="cursor-pointer">
        <Image src={'/icons/email.png'} width={33} height={33} alt='Email'/>
      </motion.a>
      <motion.a variants={fadeIn}  key={2} whileHover={{ scale: 1.125 }} transition={hoverTransition} href={"https://www.linkedin.com/in/cantrellcasey/"} target="_blank" className="cursor-pointer">
        <Image src={'/icons/linkedin.png'} width={33} height={33} alt='LinkedIn'/>
      </motion.a>
      <motion.a variants={fadeIn}  key={3} whileHover={{ scale: 1.125 }} transition={hoverTransition} href={"https://github.com/caseycantrell"} target="_blank" className="cursor-pointer">
        <Image src={'/icons/github.png'} width={33} height={33} alt='Github' />
      </motion.a>
    </motion.div>
  )
}
  
export default Socials