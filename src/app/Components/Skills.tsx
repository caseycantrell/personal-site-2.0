interface SkillsProps {
  onClick: (index: number) => void
}
  
const Skills = ({ onClick }: SkillsProps) => {
    return (
      <div className="w-full h-full text-black flex flex-col items-start p-6 space-y-4">
        <p className="text-5xl font-bold mb-8">Skills</p>
        <button onClick={() => onClick(1)}>Go to my bio section</button>
        <button onClick={() => onClick(3)}>Go to my portfolio section</button>
        <button onClick={() => onClick(4)}>Go to my contact section</button>
        <button onClick={() => onClick(0)}>Go home</button>
      </div>
    )
  }
  
export default Skills