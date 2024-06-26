interface AboutProps {
  onClick: (index: number) => void
}

const About = ({ onClick }: AboutProps) => {
    return (
      <div className="w-full h-full text-black flex flex-col items-start p-6 space-y-4">
        <p className="text-5xl font-bold mb-8">About</p>
        <button onClick={() => onClick(2)}>Go to my skills section</button>
        <button onClick={() => onClick(3)}>Go to my portfolio section</button>
        <button onClick={() => onClick(4)}>Go to my contact section</button>
        <button onClick={() => onClick(0)}>Go home</button>
      </div>
    )
  }
  
export default About