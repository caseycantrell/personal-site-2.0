const Skills: React.FC<{ onClick: (index: number) => void }> = ({ onClick }) => {
    return (
        <div className="w-full h-full text-black flex flex-col items-start p-6 space-y-4">
         <p className="text-5xl font-bold mb-8">Skills</p>
        <button onClick={() => onClick(0)}>Go to my bio section</button>
        <button onClick={() => onClick(2)}>Go to my portfolio section</button>
        <button onClick={() => onClick(3)}>Go to my contact section</button>
      </div>
    )
  }
  
  export default Skills