'use client'

import ClickyBox from "./Components/ClickyBox"

export default function Home() {
  return (
    <main className="flex h-screen flex-col lg:items-center lg:justify-center bg-custom">
      <div className="">
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
