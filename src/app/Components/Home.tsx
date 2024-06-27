interface HomeProps {
    onClick: (index: number) => void
  }
    
const Home = ({ onClick }: HomeProps) => {
    return (
      <div className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black">
      <div className="col-span-5">
        <p className="text-5xl font-bold mb-8 ">Home</p>
      </div>
      <div className="grid grid-cols-2 gap-y-8 lg:gap-y-4 lg:flex lg:flex-col py-8 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-semibold">
          <button onClick={() => onClick(1)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">About</button>
          <button onClick={() => onClick(2)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Skills</button>
          <button onClick={() => onClick(3)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Portfolio</button>
          <button onClick={() => onClick(4)} className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg">Contact</button>
        </div>
      </div>
    )
  }
    
  export default Home