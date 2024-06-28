import Image from "next/image"
import { motion } from 'framer-motion'

const Socials = () => {
    return (
      <div className="absolute top-6 right-7 hidden lg:flex flex-row items-center gap-x-4">
        <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, type: "spring", damping: 10, mass: 0.75, stiffness: 100 }} href={"tel:+18167187749"} className="cursor-pointer">
          <Image src={'/icons/mail.png'} width={30} height={30} alt='LinkedIn'/>
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, type: "spring", damping: 10, mass: 0.75, stiffness: 100 }} href={"tel:+18167187749"} className="cursor-pointer">
          <Image src={'/icons/phonedark.png'} width={30} height={30} alt='LinkedIn'/>
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, type: "spring", damping: 10, mass: 0.75, stiffness: 100 }} href={"https://www.linkedin.com/in/cantrellcasey/"} target="_blank" className="cursor-pointer">
          <Image src={'/icons/linkedin.png'} width={30} height={30} alt='LinkedIn'/>
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }} transition={{ duration: 0.5, type: "spring", damping: 10, mass: 0.75, stiffness: 100 }} href={"https://github.com/caseycantrell"} target="_blank" className="cursor-pointer">
          <Image src={'/icons/github.png'} width={30} height={30} alt='Github' />
        </motion.a>
      </div>
    )
  }
  
export default Socials