'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import { fadeInTransition } from './UI/Animations'

const ClickyBox: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [contentIndex, setContentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const handleNavClick = (index: number) => {
    setContentIndex(index)
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const contents = [
    <Home key={0} handleNavClick={handleNavClick} />,
    <About key={1} handleNavClick={handleNavClick} />,
    <Skills key={2} handleNavClick={handleNavClick} />,
    <Projects key={3} handleNavClick={handleNavClick} />,
    <Contact key={4} handleNavClick={handleNavClick} />,
  ]

  return (
    <motion.div     
      initial="initial"
      animate="animate"
      variants={fadeInTransition}
      className='container'
    >
      <motion.div className="square">
        <motion.div
          animate={{ [isMobile ? 'rotateY' : 'rotateX']: isFlipped ? 180 : 0 }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 50, 
            damping: 10, 
            mass: 1
          }}
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
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)', // For Safari support
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(1px)',
              WebkitBackdropFilter: 'blur(1px)', // For Safari support
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '10px',
              transform: isMobile ? 'rotateY(180deg)' : 'rotateX(180deg)',
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
          // justify-content: center;
          // align-items: center;
          height: 1000px;
          width: 100vw;
          overflow: scroll;
        }
        .square {
          width: 100dvw;
          height: 850px;
          perspective: 2000px;
        }
        @media (min-width: 1024px) {
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            overflow: scroll;
          }
          .square {
            width: 1200px;
            height: 700px;
            perspective: 2000px;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ClickyBox
