'use client'

import ClickyBox from "./Components/ClickyBox"

export default function Home() {
  return (
    <main className="bg-custom">
      <div className="flex h-screen flex-col lg:items-center lg:justify-center ">
        <ClickyBox />
      </div>
      <style jsx>{`
      .bg-custom {
        background-image: url('/code.jpg');
        background-size: cover;
        background-position: center;
      }
      `}</style>
    </main>
  )
}
