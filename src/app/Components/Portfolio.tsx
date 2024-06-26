interface PortfolioProps {
  onClick: (index: number) => void
}

const Portfolio = ({ onClick }: PortfolioProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black">
      <div className="col-span-5">
        <p className="text-5xl font-bold mb-8 ">Portfolio</p>
      </div>
      <div className="grid grid-cols-2 gap-y-4 lg:flex lg:flex-col py-4 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-lg lg:text-xl font-semibold">
          <button onClick={() => onClick(1)}>About</button>
          <button onClick={() => onClick(2)}>Skills</button>
          <button onClick={() => onClick(4)}>Contact</button>
          <button onClick={() => onClick(0)}>Home</button>
        </div>
      </div>
    )
  }
  
export default Portfolio