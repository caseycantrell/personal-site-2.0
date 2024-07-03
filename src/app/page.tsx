'use client'

import { useEffect, useState } from "react"
import ClickyBox from "./Components/ClickyBox"
import Loading from "./Components/UI/Loading"

export default function Home() {
  const [ isBGImageLoaded, setIsBGImageLoaded ] = useState(false)

  useEffect(() => {
    const handleImageLoad = () => {
      setIsBGImageLoaded(true)
    }

    const image = new Image()
    image.src = '/images/code.jpg'
    image.onload = handleImageLoad

    return () => {
      image.onload = null
    }
  }, [])

  const isLoading = !isBGImageLoaded

  return (
    <main className="bg-custom frosted-glass">
      <div className="flex flex-col lg:items-center lg:justify-center">
        { isLoading ? <Loading /> : <ClickyBox /> }
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
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(8px); /* for Safari */
        z-index: 0; 
      }
      `}</style>
    </main>
  )
}
