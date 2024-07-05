'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import { mainPageFadeInTransition } from './UI/Animations'

const ClickyBox: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const [contentIndex, setContentIndex] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleNavClick = (index: number) => {
    setContentIndex(index)
    setIsFlipped(!isFlipped)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const contents: JSX.Element[] = [
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
      variants={mainPageFadeInTransition}
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
          <div
            className="front"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)', // For Safari support
              boxShadow: '6px 4px 12px rgba(0, 0, 0, 0.2)',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: isMobile ? '0px 0px 14px 14px' : '10px',
              transform: 'rotateX(0deg)',
            }}
          >
            {contents[contentIndex]}
          </div>
          <div
            className="back"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)', // For Safari support
              boxShadow: '6px 4px 12px rgba(0, 0, 0, 0.2)',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: isMobile ? '0px 0px 14px 14px' : '10px',
              transform: isMobile ? 'rotateY(180deg)' : 'rotateX(180deg)',
            }}
          >
            {contents[contentIndex]}
          </div>
        </motion.div>
      </motion.div>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          height: 1000px;
          max-width: 1250px;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .square {
          width: 100%;
          height: 850px;
          perspective: 6000px;
        }
        @media (min-width: 1200px) {
          .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100dvh;
            width: 100%;
            overflow-y: auto;
          }
          .square {
            width: 1200px;
            height: 700px;
            perspective: 12000px;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ClickyBox
