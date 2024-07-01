import { useState } from 'react'
import Socials from "./UI/Socials"
import Spyntax from "./Projects/Spyntax"
import Webflix from "./Projects/Webflix"
import COINdex from "./Projects/Coindex"
import Beatboi from "./Projects/Beatboi"
import Memeboi from "./Projects/Memeboi"
import GORS from "./Projects/Gors"
import CaseyRells from "./Projects/Caseyrells"

interface ProjectsProps {
  onClick: (index: number) => void
}

const Projects = ({ onClick }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const handleProjectClick = (index: number) => {
    setSelectedProject(index)
  }

  const projectComponents = [
    <Spyntax key={0} />,
    <Webflix key={1} />,
    <COINdex key={2} />,
    <Beatboi key={3} />,
    <Memeboi key={4} />,
    <GORS key={5} />,
    <CaseyRells key={6} />
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
          {selectedProject !== null ? projectComponents[selectedProject] : 
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
