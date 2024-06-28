import Socials from "./UI/Socials"

interface ProjectsProps {
  onClick: (index: number) => void
}

const Projects = ({ onClick }: ProjectsProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex col-span-5 justify-center items-center">
          <p className="text-8xl font-bold mb-8 ">Projects</p>

          {/* projects content goes here */}

        </div>
        <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
          <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
          {/* <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button> */}
        </div>
      </div>
    )
  }
  
export default Projects