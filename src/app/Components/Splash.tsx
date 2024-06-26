interface SplashProps {
    onClick: (index: number) => void
  }
    
  const Splash = ({ onClick }: SplashProps) => {
      return (
        <div className="w-full h-full text-black flex flex-col items-start p-6 space-y-4">
          <p className="text-5xl font-bold mb-8">Splash</p>
          <button onClick={() => onClick(1)}>Go to my bio section</button>
          <button onClick={() => onClick(2)}>Go to my skills section</button>
          <button onClick={() => onClick(3)}>Go to my portfolio section</button>
          <button onClick={() => onClick(4)}>Go to my contact section</button>
        </div>
      )
    }
    
  export default Splash