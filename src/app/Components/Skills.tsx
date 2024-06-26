interface SkillsProps {
  onClick: (index: number) => void
}
  
const Skills = ({ onClick }: SkillsProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black">
        <div className="flex flex-col justify-center col-span-5 gap-y-8 lg:gap-y-16 pl-6 lg:pl-32">
         <div className="grid grid-cols-2 gap-y-0 lg:gap-y-16 lg:flex lg:flex-col mt-4 lg:mt-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
              <p className="font-extrabold text-2xl lg:text-4xl mr-1">Frontend:</p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">React<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">Next.js<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">JavaScript<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">HTML5<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">CSS3+<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">SASS</p>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-end">
              <p className="font-extrabold text-2xl lg:text-4xl mr-1">Backend:</p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">Ruby/Rails<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">Node.js<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">Python<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">SQL<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">Postgres<span className="hidden lg:inline">,</span></p>
              <p className="text-xl font-semibold ml-4 lg:ml-1">Nginx</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
            <p className="font-extrabold text-2xl lg:text-4xl mr-1">Tools & Version Control:</p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Git<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">GitHub<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Figma<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Jira</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end">
            <p className="font-extrabold text-2xl lg:text-4xl mr-1">Testing & Methodologies:</p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Rspec<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Jest<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Agile<span className="hidden lg:inline">,</span></p>
            <p className="text-xl font-semibold ml-4 lg:ml-1">Scrum</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-4 lg:flex lg:flex-col py-4 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-lg lg:text-xl font-semibold">
          <button onClick={() => onClick(1)}>About</button>
          <button onClick={() => onClick(3)}>Portfolio</button>
          <button onClick={() => onClick(4)}>Contact</button>
          <button onClick={() => onClick(0)}>Home</button>
        </div>
      </div>
    )
  }
  
export default Skills