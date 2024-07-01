import { motion } from "framer-motion"
import Image from "next/image"

const hoverTransition = { 
  duration: 0.5, 
  type: "spring", 
  damping: 10, 
  mass: 0.75, 
  stiffness: 100 
}

const CaseyRells = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-16">
      <p className="text-6xl font-extrabold">caseyrells.com</p>
      <p className="text-lg font-semibold mt-8">
        My other website for the DJ work I do outside of Software Engineering. Made with HTML5 and Bootstrap.
      </p>
      <div className="flex flex-row items-center gap-x-6 mt-6">
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href="https://www.caseyrells.com/" className="cursor-pointer" target="_blank">
          <Image src={'/icons/link.png'} width={35} height={35} alt="Link" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href="https://github.com/caseyrells/caseyrells.github.io" className="cursor-pointer" target="_blank">
          <Image src={'/icons/github.png'} width={35} height={35} alt="Link" />
        </motion.a>
      </div>
    </div>
  )
}
  
export default CaseyRells
  