'use client'

import { useEffect, useState } from "react"
import ClickyBox from "./Components/ClickyBox"
import Loading from "./Components/UI/Loading"
import Copyright from "./Components/UI/Copyright"

export default function Home() {
  const [isBGImageLoaded, setIsBGImageLoaded] = useState(false)

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

  return (
    <main className="relative page-backdrop">
      <div className="flex flex-col lg:items-center lg:justify-center min-h-screen">
        {isBGImageLoaded ? <ClickyBox /> : <Loading />}
      </div>
      <Copyright />
    </main>
  )
}
