import Image from "next/image"
import { motion } from 'framer-motion'
import { hoverTransition } from "./Animations"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      delay: 0.2,
      duration: 1,
      opacity: { 
        duration: 1.2, ease: "easeInOut",
        delay: 0.2
      }
    }
  }
}

const Socials = () => {
  return (
    <div className="absolute top-4 right-4 hidden lg:flex flex-row items-center gap-x-3.5">
      <motion.a initial="initial" animate="animate" variants={fadeIn}  whileHover={{ scale: 1.125 }} transition={hoverTransition} href={"mailto:cantrellcasey@gmail.com"} className="cursor-pointer">
        <Image src={'/icons/email.png'} width={33} height={33} alt='Email'/>
      </motion.a>
      <motion.a  initial="initial" animate="animate" variants={fadeIn} whileHover={{ scale: 1.125 }} transition={hoverTransition} href={"https://www.linkedin.com/in/cantrellcasey/"} target="_blank" className="cursor-pointer">
        <Image src={'/icons/linkedin.png'} width={33} height={33} alt='LinkedIn'/>
      </motion.a>
      <motion.a  initial="initial" animate="animate" variants={fadeIn} whileHover={{ scale: 1.125 }} transition={hoverTransition} href={"https://github.com/caseycantrell"} target="_blank" className="cursor-pointer">
        <Image src={'/icons/github.png'} width={33} height={33} alt='Github' />
      </motion.a>
    </div>
  )
}
  
export default Socials