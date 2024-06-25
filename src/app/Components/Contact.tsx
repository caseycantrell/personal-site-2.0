interface ContactProps {
  onClick: (index: number) => void
}

const Contact = ({ onClick }: ContactProps) => {
    return (
      <div className="w-full h-full text-black flex flex-col items-start p-6 space-y-4">
        <p className="text-5xl font-bold mb-8">Contact</p>
        <button onClick={() => onClick(0)}>Go to my bio section</button>
        <button onClick={() => onClick(1)}>Go to my skills section</button>
        <button onClick={() => onClick(2)}>Go to my portfolio section</button>
      </div>
    )
  }
  
export default Contact