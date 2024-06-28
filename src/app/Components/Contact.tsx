import Image from "next/image"
import { motion } from 'framer-motion'

interface ContactProps {
  onClick: (index: number) => void
}

const Contact = ({ onClick }: ContactProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="col-span-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 h-full items-center">
            <div className="col-span-2">
              <p className="px-12 lg:px-24 mt-2 lg:mt-0 text-2xl lg:text-6xl font-extrabold">Thanks for stopping by. Feel free to reach out and I'll get in touch with you expeditiously.</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-10 -ml-4 lg:ml-4 mt-12 lg:mt-0">
              <div className="flex flex-row items-center">
                <Image src={'/icons/location.png'} width={35} height={35} alt='Email icon' />
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-semibold">Location:</p>
                  <p className="text-md">Austin, TX</p>
                </div>
              </div>
              <a href="tel:+18167187749" className="flex flex-row items-center cursor-pointer">
                <Image src={'/icons/phone.png'} width={35} height={35} alt='Email icon' />
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-semibold">Call/Text:</p>
                  <p className="text-md">&#40;816&#41; 718-7749</p>
                </div>
              </a>
              <a href="mailto:cantrellcasey@gmail.com" className="flex flex-row items-center cursor-pointer">
                <Image src={'/icons/email.png'} width={35} height={35} alt='Email icon' />
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-semibold">Email:</p>
                  <p className="text-md">cantrellcasey@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
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
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Portfolio</button>
          <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button>
        </div>
      </div>
    )
  }
  
export default Contact