interface PortfolioProps {
  onClick: (index: number) => void
}

const Portfolio = ({ onClick }: PortfolioProps) => {
    return (
      <div className="w-full h-full text-black flex flex-col items-start p-6 space-y-4">
        <p className="text-5xl font-bold mb-8">Portfolio</p>
        <button onClick={() => onClick(1)}>Go to my about section</button>
        <button onClick={() => onClick(2)}>Go to my skills section</button>
        <button onClick={() => onClick(4)}>Go to my contact section</button>
        <button onClick={() => onClick(0)}>Go home</button>
      </div>
    )
  }
  
export default Portfolio