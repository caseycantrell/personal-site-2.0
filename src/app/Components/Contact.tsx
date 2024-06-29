import Image from "next/image"
import Socials from "./UI/Socials"
import { useState } from "react"
import { motion } from 'framer-motion'

interface ContactProps {
  onClick: (index: number) => void
}

const hoverTransition = { 
  duration: 2, 
  type: "spring", 
  damping: 10, 
  mass: 0.75, 
  stiffness: 100 
}

const Contact = ({ onClick }: ContactProps) => {
  const [ phoneHovered, setPhoneHovered] = useState(false)
  const [ emailHovered, setEmailHovered] = useState(false)
  const [ locationHovered, setLocationHovered] = useState(false)

    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="col-span-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 h-full items-center">
            <div className="col-span-2">
              <p className="px-12 lg:px-24 mt-2 lg:mt-0 text-2xl lg:text-6xl font-extrabold">Thanks for stopping by. Feel free to reach out and I'll get in touch with you expeditiously.</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-10 -ml-4 lg:ml-4 mt-12 lg:mt-0">
              <a href="https://www.google.com/maps/place/Austin,+TX/" target="_blank" onMouseEnter={() => setLocationHovered(true)} onMouseLeave={() => setLocationHovered(false)} className="flex flex-row items-center">
                <motion.div
                  animate={{ scale: locationHovered ? 1.25 : 1 }}
                  transition={hoverTransition}
                >
                <Image src={'/icons/locationdark.png'} width={35} height={35} alt='Pin'/>
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-semibold">Location:</p>
                  <p className="text-md">Austin, TX</p>
                </div>
              </a>
              <a href="tel:+18167187749" onMouseEnter={() => setPhoneHovered(true)} onMouseLeave={() => setPhoneHovered(false)} className="flex flex-row items-center cursor-pointer">
                <motion.div
                    animate={{ scale: phoneHovered ? 1.25 : 1 }}
                    transition={hoverTransition}
                  >
                  <Image src={'/icons/phonedark.png'} width={35} height={35} alt='Phone' />
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-semibold">Call/Text:</p>
                  <p className="text-md">&#40;816&#41; 718-7749</p>
                </div>
              </a>
              <a href="mailto:cantrellcasey@gmail.com" onMouseEnter={() => setEmailHovered(true)} onMouseLeave={() => setEmailHovered(false)} className="flex flex-row items-center cursor-pointer">
                <motion.div
                  animate={{ scale: emailHovered ? 1.25 : 1 }}
                  transition={hoverTransition}
                >
                  <Image src={'/icons/mail.png'} width={35} height={35} alt='Email' />
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-semibold">Email:</p>
                  <p className="text-md">cantrellcasey@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button>
          <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
          <button onClick={() => onClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Projects</button>
        </div>
      </div>
    )
  }
  
export default Contact