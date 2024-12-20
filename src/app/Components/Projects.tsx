import { useState } from 'react'
import Socials from "./UI/Socials"
import ProjectShow from './ProjectShow'
import { motion, AnimatePresence } from "framer-motion"
import { fadeInTransition } from './UI/Animations'

interface ProjectsProps {
  handleNavClick: (index: number) => void
}

const Projects = ({ handleNavClick }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [showProjectMenu, setShowProjectMenu] = useState<boolean>(false)

  const handleProjectClick = (index: number) => {
    setSelectedProject(index)
    if (showProjectMenu) {
      setShowProjectMenu(false)
    }
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const fallInVariants = {
    initial: { y: -200, x: -100, opacity: 0, color: "#000000" },
    animate: { 
      y: 0, 
      x: 0,
      opacity: 1, 
      color: ["#000000", "#FFFFFF", "#000000"],
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
        duration: 0.2,
        opacity: { 
          duration: 0.5, ease: "easeInOut" 
        },
        color: {
          duration: 0.75,
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }
      }
    }
  }

  const mobileFallInVariants = {
    initial: { y: -75, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        stiffness: 125,
        damping: 8,
        mass: 0.5,
        duration: 0.2,
        opacity: { 
          duration: 0.8, ease: "easeInOut" 
        },
      }
    }
  }

  const projectDetails: {
    title: string
    description: string
    siteLink: string
    githubLink: string
    previewPicture: string
  }[] = [
    { title: "Crowdwork", description: "Intended to be a version 2 of my older app Spyntax, this platform lets users send chat messages and song requests to DJs using the Spotify API, in real-time. Built with Next.js, Node.js (Express), and WebSockets.", siteLink: "https://crowdwork.vercel.app/", githubLink: "https://github.com/caseycantrell/crowdwork-backend", previewPicture: "/images/projects/crowdwork2.png" },
    { title: "Spyntax", description: "Real-time song request app for DJs, built with Vue.js on the frontend and a Ruby on Rails backend, using WebSockets for live communication.", siteLink: "https://spyntax.vercel.app/", githubLink: "https://github.com/caseycantrell/spyntax-app-backend", previewPicture: "/images/projects/spyntax.png" },
    { title: "Webflix", description: "A clone of a popular video streaming service. Made with React, Firebase, Fuse.js, and Styled Components.", siteLink: "https://web-flix.netlify.app/", githubLink: "https://github.com/caseycantrell/webflix", previewPicture: "/images/projects/webflix.png" },
    { title: "COINdex", description: "Info, news, and statistics on popular cryptocurrencies. Made in React with Redux, Axios, Chart.js, Millify, Moment, Ant Design components, Bing API, and the Coinranking API.", siteLink: "https://coindex2.netlify.app/", githubLink: "https://github.com/caseycantrell/coindex2", previewPicture: "/images/projects/coindex.png" },
    { title: "Beatboi", description: "A clone of one of my favorite classic drum machines. Made with React.", siteLink: "https://beatboi.netlify.app/", githubLink: "https://github.com/caseycantrell/beatboi", previewPicture: "/images/projects/beatboi.png" },
    { title: "Memeboi", description: "A simple meme generator just for funsies. Best viewed/used on a mobile device. Made with React and the Imgflip API.", siteLink: "https://memeboi.netlify.app/", githubLink: "https://github.com/caseycantrell/meme-boi", previewPicture: "/images/projects/memeboi.png" },
    { title: "G.O.R.S.", description: "Static site for Goats Only Recording Studio. Made with HTML5 and Bootstrap.", siteLink: "https://www.goatsonlyrecordingstudio.com/", githubLink: "https://github.com/goatsonlyrecordingstudio/goatsonlyrecordingstudio.github.io", previewPicture: "/images/projects/gors.png" },
    { title: "Casey Rells", description: "My other website for the DJ work I do outside of Software Engineering. Made with HTML5 and Bootstrap.", siteLink: "https://www.caseyrells.com/", githubLink: "https://github.com/caseyrells/caseyrells.github.io", previewPicture: "/images/projects/caseyrells.png" },
  ]

  return (
    <AnimatePresence>
      <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInTransition}   
          className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex flex-col lg:grid lg:grid-cols-8 col-span-5 items-center justify-center relative">

          {/* mobile menu */}
          <div className="flex flex-row lg:hidden justify-center" onClick={() => setShowProjectMenu(!showProjectMenu)}>
            <p className='text-lg font-semibold border border-gray-900 rounded-md px-4 py-2 shadow-lg cursor-pointer select-none'>Select Project</p>
          </div>
          {showProjectMenu && (
            <motion.div 
              initial="initial"
              animate="animate"
              variants={containerVariants}  
              className='w-80 flex flex-col items-center border-2 border-black bg-black bg-opacity-70 backdrop-blur-sm rounded-md py-6 gap-y-6 text-lg font-semibold absolute top-14 z-10 select-none'>
              {projectDetails.map((project, index) => (
                <motion.div        
                  variants={mobileFallInVariants} 
                  key={index} 
                  onClick={() => handleProjectClick(index)} 
                  className="cursor-pointer text-white">{project.title}</motion.div>
              ))}
            </motion.div>
          )}
          {/* end mobile menu */}

          <motion.div    
            initial="initial"
            animate="animate"
            variants={containerVariants} 
            className="hidden lg:flex flex-col col-span-2 justify-center items-start text-2xl font-bold ml-12 gap-y-8">
              {projectDetails.map((project, index) => (
                <motion.p
                  key={index}
                  variants={fallInVariants}
                  whileHover={{ x: 10 }}
                  onClick={() => handleProjectClick(index)}
                  className="cursor-pointer text-xl"
                >
                  {project.title}
                </motion.p>
              ))}
          </motion.div>
          <div className="lg:col-span-6">
            {selectedProject !== null ? <ProjectShow title={projectDetails[selectedProject].title} description={projectDetails[selectedProject].description} siteLink={projectDetails[selectedProject].siteLink} githubLink={projectDetails[selectedProject].githubLink} previewPicture={projectDetails[selectedProject].previewPicture} /> : 
              <div className='w-full h-full flex flex-row justify-center items-center'>
                <p className='text-7xl font-extrabold flex text-center mt-24 lg:mt-0'>Projects</p>
              </div>
            }
          </div>
        </div>
        <Socials />
        <div className="grid grid-cols-2 gap-y-6 lg:gap-y-4 lg:flex lg:flex-col py-6 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-extrabold">
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">HOME</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">ABOUT</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">SKILLS</motion.button>
          <motion.button whileHover={{ scale: 1.125 }} onClick={() => handleNavClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out">CONTACT</motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Projects
