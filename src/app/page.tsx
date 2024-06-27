'use client'

import ClickyBox from "./Components/ClickyBox"

export default function Home() {
  return (
    <main className="bg-custom frosted-glass">
      <div className="flex h-screen flex-col lg:items-center lg:justify-center ">
        <ClickyBox />
      </div>
      <style jsx>{`
      .bg-custom {
        background-image: url('/images/code.jpg');
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 0;
      }
      .frosted-glass::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0); 
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px); /* for Safari */
        z-index: -1; 
      }
      `}</style>
    </main>
  )
}
