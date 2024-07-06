import Image from "next/image"
import Socials from "./UI/Socials"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInTransition, hoverTransition } from "./UI/Animations"

interface ContactProps {
  handleNavClick: (index: number) => void
}

const Contact = ({ handleNavClick }: ContactProps) => {
  const [ phoneHovered, setPhoneHovered] = useState<boolean>(false)
  const [ emailHovered, setEmailHovered] = useState<boolean>(false)
  const [ locationHovered, setLocationHovered] = useState<boolean>(false)
  const [ linkedInHovered, setLinkedInHovered] = useState<boolean>(false)
  const [ gitHubHovered, setGitHubHovered] = useState<boolean>(false)

    return (
    <AnimatePresence>
      <motion.div      
        initial="initial"
        animate="animate"
        variants={fadeInTransition} 
        className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="col-span-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 h-full items-center">
            <div className="col-span-2">
              <p className="px-12 lg:px-24 mt-2 lg:mt-0 text-2xl lg:text-6xl font-extrabold">Thanks for stopping by. Feel free to reach out and I&apos;ll get in touch with you expeditiously.</p>
            </div>
            <div className="flex flex-col col-span-1 space-y-6 lg:space-y-10 ml-0 lg:ml-4 mt-12 lg:mt-0">
              <a href="https://www.google.com/maps/place/Austin,+TX/" target="_blank" onMouseEnter={() => setLocationHovered(true)} onMouseLeave={() => setLocationHovered(false)} className="flex flex-row items-center">
                <motion.div
                  animate={{ scale: locationHovered ? 1.1 : 1 }}
                  transition={hoverTransition}
                >
                <Image src={'/icons/location.png'} width={40} height={40} alt='Pin'/>
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-bold">Location:</p>
                  <p className="text-md font-semibold text-gray-900">Austin, TX</p>
                </div>
              </a>
              <a href="tel:+18167187749" onMouseEnter={() => setPhoneHovered(true)} onMouseLeave={() => setPhoneHovered(false)} className="flex flex-row items-center cursor-pointer">
                <motion.div
                    animate={{ scale: phoneHovered ? 1.1 : 1 }}
                    transition={hoverTransition}
                  >
                  <Image src={'/icons/phone.png'} width={40} height={40} alt='Phone' />
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-bold">Call/Text:</p>
                  <p className="text-md font-semibold">&#40;816&#41; 718-7749</p>
                </div>
              </a>
              <a href="mailto:cantrellcasey@gmail.com" onMouseEnter={() => setEmailHovered(true)} onMouseLeave={() => setEmailHovered(false)} className="flex flex-row items-center cursor-pointer">
                <motion.div
                  animate={{ scale: emailHovered ? 1.1 : 1 }}
                  transition={hoverTransition}
                >
                  <Image src={'/icons/email.png'} width={40} height={40} alt='Email' />
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-bold">Email:</p>
                  <p className="text-md font-semibold">cantrellcasey@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/cantrellcasey/" target="_blank" onMouseEnter={() => setLinkedInHovered(true)} onMouseLeave={() => setLinkedInHovered(false)} className="flex flex-row items-center cursor-pointer">
                <motion.div
                  animate={{ scale: linkedInHovered ? 1.1 : 1 }}
                  transition={hoverTransition}
                >
                  <Image src={'/icons/linkedin.png'} width={40} height={40} alt='LinkedIn' />
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-bold">LinkedIn:</p>
                  <p className="text-md font-semibold">Casey Cantrell</p>
                </div>
              </a>
              <a href="https://github.com/caseycantrell" target="_blank" onMouseEnter={() => setGitHubHovered(true)} onMouseLeave={() => setGitHubHovered(false)} className="flex flex-row items-center cursor-pointer">
                <motion.div
                  animate={{ scale: gitHubHovered ? 1.1 : 1 }}
                  transition={hoverTransition}
                >
                  <Image src={'/icons/github.png'} width={40} height={40} alt='GitHub' />
                </motion.div>
                <div className="flex flex-col ml-6">
                  <p className="text-lg font-bold">GitHub:</p>
                  <p className="text-md font-semibold">caseycantrell</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-extrabold">
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">HOME</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">ABOUT</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">SKILLS</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">PROJECTS</motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
    )
  }
  
export default Contact