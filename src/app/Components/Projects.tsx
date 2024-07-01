import { useState } from 'react'
import Socials from "./UI/Socials"
import ProjectShow from './ProjectShow'
import SpyntaxPicture from "../../../public/images/projects/spyntax.png"
import { StaticImageData } from 'next/image'

interface ProjectsProps {
  onClick: (index: number) => void
}

const Projects = ({ onClick }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleProjectClick = (index: number) => {
    setSelectedProject(index)
  }

  const projectDetails: {
    title: string
    description: string
    siteLink: string
    githubLink: string
    previewPicture: string
  }[] = [
    { title: "Spyntax", description: "Web application to make song requests to DJ's in real-time. Made with Vue and Ruby on Rails using ActionCable, Day.js, and Bootstrap.", siteLink: "https://spyntax.netlify.app/", githubLink: "https://github.com/caseycantrell/spyntax-app-backend", previewPicture: "/images/projects/spyntax.png" },
    { title: "Webflix", description: "A clone of a popular video streaming service. Made with React, Firebase, Fuse.js, and Styled Components.", siteLink: "https://web-flix.netlify.app/", githubLink: "https://github.com/caseycantrell/webflix", previewPicture: "/images/projects/webflix.png" },
    { title: "COINdex", description: "Info, news, and statistics on popular cryptocurrencies. Made in React with Redux, Axios, Chart.js, Millify, Moment, Ant Design components, Bing API, and the Coinranking API.", siteLink: "https://coindex2.netlify.app/", githubLink: "https://github.com/caseycantrell/coindex2", previewPicture: "/images/projects/coindex.png" },
    { title: "Beatboi", description: "A clone of one of my favorite classic drum machines. Made with React.", siteLink: "https://beatboi.netlify.app/", githubLink: "https://github.com/caseycantrell/beatboi", previewPicture: "/images/projects/beatboi.png" },
    { title: "Memeboi", description: "A simple meme generator just for funsies. Best viewed/used on a mobile device. Made with React and the Imgflip API.", siteLink: "https://memeboi.netlify.app/", githubLink: "https://github.com/caseycantrell/meme-boi", previewPicture: "/images/projects/memeboi.png" },
    { title: "GORS", description: "Static site for Goats Only Recording Studio. Made with HTML5 and Bootstrap.", siteLink: "https://www.goatsonlyrecordingstudio.com/", githubLink: "https://github.com/goatsonlyrecordingstudio/goatsonlyrecordingstudio.github.io", previewPicture: "/images/projects/gors.png" },
    { title: "Casey Rells", description: "My other website for the DJ work I do outside of Software Engineering. Made with HTML5 and Bootstrap.", siteLink: "https://www.caseyrells.com/", githubLink: "https://github.com/caseyrells/caseyrells.github.io", previewPicture: "/images/projects/caseyrells.png" },
  ]

  return (
    <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
      <div className="grid grid-cols-8 col-span-5 justify-center">
        <div className="flex flex-col col-span-2 justify-center items-start text-2xl font-bold ml-12 gap-y-7">
          <p onClick={() => handleProjectClick(0)} className="cursor-pointer">Spyntax</p>
          <p onClick={() => handleProjectClick(1)} className="cursor-pointer">Webflix</p>
          <p onClick={() => handleProjectClick(2)} className="cursor-pointer">COINdex</p>
          <p onClick={() => handleProjectClick(3)} className="cursor-pointer">Beatboi</p>
          <p onClick={() => handleProjectClick(4)} className="cursor-pointer">Memeboi</p>
          <p onClick={() => handleProjectClick(5)} className="cursor-pointer">G.O.R.S.</p>
          <p onClick={() => handleProjectClick(6)} className="cursor-pointer">caseyrells</p>
        </div>
        <div className="col-span-6">
          {selectedProject !== null ? <ProjectShow title={projectDetails[selectedProject].title} description={projectDetails[selectedProject].description} siteLink={projectDetails[selectedProject].siteLink} githubLink={projectDetails[selectedProject].githubLink} previewPicture={projectDetails[selectedProject].previewPicture} /> : 
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <p className='text-4xl font-bold'>Projects</p>
            </div>
          }
        </div>
      </div>
      <Socials />
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
        <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button>
        <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
        <button onClick={() => onClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
        <button onClick={() => onClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
      </div>
    </div>
  )
}

export default Projects
