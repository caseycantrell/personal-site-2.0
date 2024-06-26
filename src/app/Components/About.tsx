import Socials from "./UI/Socials"
import Image from "next/image"
import selfPic from '../../../public/images/self.jpg'

interface AboutProps {
  onClick: (index: number) => void
}

const About = ({ onClick }: AboutProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative">
        <div className="flex flex-col col-span-5 px-8 lg:px-16 justify-center">
          <div className="flex flex-col lg:flex-row items-center mb-6 mt-4 lg:mt-0 ml-0 lg:ml-1">
            <Image src={selfPic} width={100} height={100} alt='Self Pic' placeholder="blur" className="rounded-md shadow-xl border border-gray-500" />
            <p className="text-4xl lg:text-7xl font-extrabold ml-4 mt-4 lg:mt-0 break-all">Casey Cantrell</p>
          </div>
          <div className="">
            <p className="flex text-sm lg:text-lg font-semibold">
              From the world of music to the realm of software engineering, 
              my journey has been a unique blend of creativity and logic. 
              While my days of live performances are behind me, I now orchestrate code with the same passion.
            </p>
            <p className="flex mt-8 text-sm lg:text-lg font-semibold">
              As a former musician turned software engineer, I bring a distinctive perspective to problem-solving, 
              finding rhythm and flow in even the most complex challenges. Swapping melodies for algorithms, 
              I thrive on creating harmonious solutions and orchestrating innovative projects.
            </p>
          </div>
          {/* about content goes here */}

        </div>
        <Socials />
        <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(0)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Home</button>
          <button onClick={() => onClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Projects</button>
          <button onClick={() => onClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
        </div>
      </div>
    )
  }
  
export default About