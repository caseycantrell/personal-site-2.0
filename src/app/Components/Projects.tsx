import { useState } from 'react'
import { motion } from 'framer-motion'
import type { StaticImageData } from 'next/image'
import Panel from './UI/Panel'
import ProjectShow from './ProjectShow'
import { staggerChildren, fallIn, fallInFlash } from './UI/Animations'
import type { PanelProps } from './UI/panels'
import crowdworkPic from '../../../public/images/projects/crowdwork2.webp'
import spyntaxPic from '../../../public/images/projects/spyntax.webp'
import webflixPic from '../../../public/images/projects/webflix.webp'
import coindexPic from '../../../public/images/projects/coindex.webp'
import beatboiPic from '../../../public/images/projects/beatboi.webp'
import memeboiPic from '../../../public/images/projects/memeboi.webp'
import gorsPic from '../../../public/images/projects/gors.webp'
import caseyrellsPic from '../../../public/images/projects/caseyrells.webp'

export interface Project {
  title: string
  description: string
  siteLink: string
  githubLink: string
  previewPicture: StaticImageData
}

const projects: Project[] = [
  { title: "Crowdwork", description: "Intended to be a version 2 of my older app Spyntax, this platform lets users send chat messages and song requests to DJs using the Spotify API, in real-time. Built with Next.js, Node.js (Express), and WebSockets.", siteLink: "https://crowdwork.vercel.app/", githubLink: "https://github.com/caseycantrell/crowdwork-backend", previewPicture: crowdworkPic },
  { title: "Spyntax", description: "Real-time song request app for DJs, built with Vue.js on the frontend and a Ruby on Rails backend, using WebSockets for live communication.", siteLink: "https://spyntax.vercel.app/", githubLink: "https://github.com/caseycantrell/spyntax-app-backend", previewPicture: spyntaxPic },
  { title: "Webflix", description: "A clone of a popular video streaming service. Made with React, Firebase, Fuse.js, and Styled Components.", siteLink: "https://web-flix.netlify.app/", githubLink: "https://github.com/caseycantrell/webflix", previewPicture: webflixPic },
  { title: "COINdex", description: "Info, news, and statistics on popular cryptocurrencies. Made in React with Redux, Axios, Chart.js, Millify, Moment, Ant Design components, Bing API, and the Coinranking API.", siteLink: "https://coindex2.netlify.app/", githubLink: "https://github.com/caseycantrell/coindex2", previewPicture: coindexPic },
  { title: "Beatboi", description: "A clone of one of my favorite classic drum machines. Made with React.", siteLink: "https://beatboi.netlify.app/", githubLink: "https://github.com/caseycantrell/beatboi", previewPicture: beatboiPic },
  { title: "Memeboi", description: "A simple meme generator just for funsies. Best viewed/used on a mobile device. Made with React and the Imgflip API.", siteLink: "https://memeboi.netlify.app/", githubLink: "https://github.com/caseycantrell/meme-boi", previewPicture: memeboiPic },
  { title: "G.O.R.S.", description: "Static site for Goats Only Recording Studio. Made with HTML5 and Bootstrap.", siteLink: "https://www.goatsonlyrecordingstudio.com/", githubLink: "https://github.com/goatsonlyrecordingstudio/goatsonlyrecordingstudio.github.io", previewPicture: gorsPic },
  { title: "Casey Rells", description: "My other website for the DJ work I do outside of Software Engineering. Made with HTML5 and Bootstrap.", siteLink: "https://www.caseyrells.com/", githubLink: "https://github.com/caseyrells/caseyrells.github.io", previewPicture: caseyrellsPic },
]

const Projects = ({ onNavigate }: PanelProps) => {
  const [selected, setSelected] = useState<Project | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const selectProject = (project: Project) => {
    setSelected(project)
    setIsMenuOpen(false)
  }

  return (
    <Panel current="projects" onNavigate={onNavigate} tightNav>
      <div className="flex flex-col lg:grid lg:grid-cols-8 col-span-5 items-center justify-center relative">
        <div className="flex flex-row lg:hidden justify-center">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(open => !open)}
            className="eyebrow text-[10px] text-ink-soft border border-rule rounded-md px-5 py-2.5 cursor-pointer select-none hover:border-accent hover:text-accent transition-colors duration-300"
          >
            Select Project
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren(0.2)}
            className="w-72 flex flex-col items-stretch border border-white/10 bg-ink/95 backdrop-blur-sm rounded-lg py-3 absolute top-14 z-20 select-none shadow-2xl"
          >
            {projects.map(project => (
              <motion.button
                key={project.title}
                type="button"
                variants={fallIn}
                onClick={() => selectProject(project)}
                className={`cursor-pointer px-5 py-2.5 text-left text-sm transition-colors duration-200 ${selected?.title === project.title ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {project.title}
              </motion.button>
            ))}
          </motion.div>
        )}

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren(0.2)}
          className="hidden lg:flex flex-col col-span-2 justify-center items-stretch pl-24 gap-y-2"
        >
          {projects.map(project => (
            <motion.button
              key={project.title}
              type="button"
              variants={fallInFlash}
              whileHover={{ x: 6 }}
              onClick={() => selectProject(project)}
              className={`cursor-pointer py-2.5 text-left text-base transition-colors duration-200 ${selected?.title === project.title ? 'text-accent font-semibold' : 'text-ink-soft hover:text-ink'}`}
            >
              {project.title}
            </motion.button>
          ))}
        </motion.div>

        <div className="lg:col-span-6">
          {selected ? <ProjectShow {...selected} /> : (
            <div className="w-full h-full flex flex-col justify-center items-center gap-3 py-16 lg:py-0">
              <p className="text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-ink">Projects</p>
              <p className="eyebrow text-[10px] text-ink-faint">Pick one from the list</p>
            </div>
          )}
        </div>
      </div>
    </Panel>
  )
}

export default Projects
