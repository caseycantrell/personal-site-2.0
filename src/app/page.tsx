'use client'

import { useEffect, useState } from "react"
import ClickyBox from "./Components/ClickyBox"
import Loading from "./Components/UI/Loading"
import Copyright from "./Components/UI/Copyright"

export default function Home() {
  const [ isBGImageLoaded, setIsBGImageLoaded ] = useState<boolean>(false)

  useEffect(() => {
    const reveal = () => setIsBGImageLoaded(true)

    const image = new Image()
    image.onload = reveal
    // never leave the page stuck on the loader if the background 404s or the
    // connection stalls -- the content matters more than the backdrop
    image.onerror = reveal
    const timeout = setTimeout(reveal, 3000)
    image.src = '/images/bg4.avif'
    if (image.complete) reveal()

    return () => {
      clearTimeout(timeout)
      image.onload = null
      image.onerror = null
    }
  }, [])

  const isLoading = !isBGImageLoaded

  return (
    <main className="relative bg-custom frosted-glass">
      <div className="flex flex-col lg:items-center lg:justify-center min-h-screen">
        { isLoading ? <Loading /> : <ClickyBox /> }
      </div>
      <Copyright />
      <style jsx>{`
      .bg-custom {
        background-image: url('/images/bg4.avif');
        background-size: cover;
        background-position: center;
        position: relative;
        z-index: 0;
        overflow: scroll;
        height: 100vh;
        width: 100vw;
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
      @media (min-width: 1200px) {
        .bg-custom {
          overflow: hidden;
        }
      }
      `}</style>
    </main>
  )
}
