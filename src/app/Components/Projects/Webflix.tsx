import { motion } from "framer-motion"
import Image from "next/image"

const hoverTransition = { 
  duration: 0.5, 
  type: "spring", 
  damping: 10, 
  mass: 0.75, 
  stiffness: 100 
}

const Webflix = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-16">
      <p className="text-6xl font-extrabold">Webflix</p>
      <p className="text-lg font-semibold mt-8">
        A clone of a popular video streaming service. Made with React, 
        Firebase, Fuse.js, and Styled Components.
      </p>
      <div className="flex flex-row items-center gap-x-6 mt-6">
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href="https://web-flix.netlify.app/" className="cursor-pointer" target="_blank">
          <Image src={'/icons/link.png'} width={35} height={35} alt="Link" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href="https://github.com/caseycantrell/webflix" className="cursor-pointer" target="_blank">
          <Image src={'/icons/github.png'} width={35} height={35} alt="Link" />
        </motion.a>
      </div>
    </div>
  )
}
  
export default Webflix
  