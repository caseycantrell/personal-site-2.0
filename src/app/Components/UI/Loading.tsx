const Loading = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="loader"></div>
      <p className="text-3xl font-bold mt-8">Loading...</p>
      <style>{`
        .loader {
          width: 90px;
          height: 14px;
          --c:#fff 92%,#0000;
          background: 
            radial-gradient(circle 7px at bottom,var(--c)) 0 0,
            radial-gradient(circle 7px at top   ,var(--c)) 0 100%;
          background-size: calc(100%/4) 50%;
          background-repeat: repeat-x;
          animation: l11 1s infinite;
        }
        @keyframes l11 {
            80%,100% {background-position: calc(100%/3) 0,calc(100%/-3) 100%}
        }
      `}</style>
    </div>
  )
} 
  
export default Loading

