'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ClickyBox: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="container">
      <motion.div
        className="square"
        onClick={handleClick}
        style={{
          width: '500px',
          height: '500px',
          perspective: '1000px',
        }}
      >
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
              backgroundColor: 'white',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Front
          </motion.div>
          <motion.div
            className="back"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundColor: 'green',
              backfaceVisibility: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: 'rotateY(180deg)',
            }}
          >
            Back
          </motion.div>
        </motion.div>
      </motion.div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .square {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

export default ClickyBox
