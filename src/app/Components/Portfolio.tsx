import Image from "next/image"
import { motion } from 'framer-motion'

interface PortfolioProps {
  onClick: (index: number) => void
}

const Portfolio = ({ onClick }: PortfolioProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex col-span-5 justify-center items-center">
          <p className="text-8xl font-bold mb-8 ">Portfolio</p>

          {/* portfolio content goes here */}

        </div>
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
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
          <button onClick={() => onClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
          <button onClick={() => onClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
          <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button>
        </div>
      </div>
    )
  }
  
export default Portfolio