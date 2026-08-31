import { motion } from 'framer-motion'
import Panel from './UI/Panel'
import { slideLeft, slideRight } from './UI/Animations'
import type { PanelProps } from './UI/panels'

const Home = ({ onNavigate }: PanelProps) => (
  <Panel current="home" onNavigate={onNavigate}>
    <div className="flex flex-col col-span-5 justify-center items-center lg:items-start lg:ml-64 mt-16 lg:mt-0">
      <motion.p variants={slideLeft} className="text-7xl lg:text-9xl font-extrabold">Casey</motion.p>
      <motion.p variants={slideLeft} className="text-7xl lg:text-9xl font-extrabold lg:-mt-6 ml-0 lg:ml-4">Cantrell</motion.p>
      <motion.p variants={slideRight} className="text-lg lg:text-2xl lg:-mt-3 ml-0 lg:ml-52 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Full-Stack Software Engineer
      </motion.p>
    </div>
  </Panel>
)

export default Home
