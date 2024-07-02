import Image from "next/image"
import { motion } from 'framer-motion'

const hoverTransition = { 
  duration: 0.5, 
  type: "spring", 
  damping: 10, 
  mass: 0.75, 
  stiffness: 100 
}

const Socials = () => {
    return (
      <div className="absolute top-4 right-4 hidden lg:flex flex-row items-center gap-x-4">
        <motion.a whileHover={{ scale: 1.2 }} transition={hoverTransition} href={"tel:+18167187749"} className="cursor-pointer">
          <Image src={'/icons/email.png'} width={35} height={35} alt='LinkedIn'/>
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={hoverTransition} href={"tel:+18167187749"} className="cursor-pointer">
          <Image src={'/icons/phone.png'} width={35} height={35} alt='LinkedIn'/>
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={hoverTransition} href={"https://www.linkedin.com/in/cantrellcasey/"} target="_blank" className="cursor-pointer">
          <Image src={'/icons/linkedin.png'} width={35} height={35} alt='LinkedIn'/>
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={hoverTransition} href={"https://github.com/caseycantrell"} target="_blank" className="cursor-pointer">
          <Image src={'/icons/github.png'} width={35} height={35} alt='Github' />
        </motion.a>
      </div>
    )
  }
  
export default Socials