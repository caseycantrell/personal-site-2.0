import { motion } from "framer-motion"
import Image from "next/image"

const hoverTransition = { 
  duration: 0.5, 
  type: "spring", 
  damping: 10, 
  mass: 0.75, 
  stiffness: 100 
}

const Coindex = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-16">
      <p className="text-6xl font-extrabold">Coindex</p>
      <p className="text-lg font-semibold mt-8">
        Info, news, and statistics on popular cryptocurrencies. Made in React with 
        Redux, Axios, Chart.js, Millify, Moment, Ant Design components, Bing API, and the Coinranking API.
      </p>
      <div className="flex flex-row items-center gap-x-6 mt-6">
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href="https://coindex2.netlify.app/" className="cursor-pointer" target="_blank">
          <Image src={'/icons/link.png'} width={35} height={35} alt="Link" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href="https://github.com/caseycantrell/coindex2" className="cursor-pointer" target="_blank">
          <Image src={'/icons/github.png'} width={35} height={35} alt="Link" />
        </motion.a>
      </div>
    </div>
  )
}
  
export default Coindex
  