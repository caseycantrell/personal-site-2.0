'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'

const ClickyBox: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [contentIndex, setContentIndex] = useState(0)

  const handleClick = (index: number) => {
    setContentIndex(index)
    setIsFlipped(!isFlipped)
  }

  const contents = [
    <Home key={0} onClick={handleClick} />,
    <About key={1} onClick={handleClick} />,
    <Skills key={2} onClick={handleClick} />,
    <Projects key={3} onClick={handleClick} />,
    <Contact key={4} onClick={handleClick} />,
  ]

  return (
    <div className="">
      <motion.div className="square">
        <motion.div
          className="inner-square"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            className="front"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)', // For Safari support
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px'
            }}
          >
            {contents[contentIndex]}
          </motion.div>
          <motion.div
            className="back"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)', // For Safari support
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              transform: 'rotateY(180deg)',
            }}
          >
            {contents[contentIndex]}
          </motion.div>
        </motion.div>
      </motion.div>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .square {
          width: 100dvw;
          height: 100dvh;
          perspective: 2000px;
        }
        @media (min-width: 1024px) {
          .square {
            width: 1200px;
            height: 700px;
            perspective: 2000px;
          }
        }
      `}</style>
    </div>
  )
}

export default ClickyBox
