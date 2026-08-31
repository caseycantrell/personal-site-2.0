'use client'

import { useCallback, useState, type ComponentType } from 'react'
import { motion, MotionConfig } from 'framer-motion'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import Projects from './Projects'
import { mainPageFadeInTransition } from './UI/Animations'
import { useIsMobile } from './UI/useIsMobile'
import type { PanelId, PanelProps } from './UI/panels'

const PANEL_COMPONENTS: Record<PanelId, ComponentType<PanelProps>> = {
  home: Home,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
}

const flipTransition = { duration: 0.6, type: 'spring', stiffness: 50, damping: 10, mass: 1 }

const ClickyBox = () => {
  const [current, setCurrent] = useState<PanelId>('home')
  const [isFlipped, setIsFlipped] = useState(false)
  const isMobile = useIsMobile()

  const handleNavigate = useCallback((id: PanelId) => {
    setCurrent(id)
    setIsFlipped(flipped => !flipped)
  }, [])

  // both faces render the same panel: the flip reveals whichever one is facing
  // out, so the content has to exist on each side
  const Panel = PANEL_COMPONENTS[current]
  const panel = <Panel onNavigate={handleNavigate} />

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial="initial"
        animate="animate"
        variants={mainPageFadeInTransition}
        className="card-viewport"
      >
        <div className="card-stage">
          <motion.div
            className="card-pivot"
            animate={{ [isMobile ? 'rotateY' : 'rotateX']: isFlipped ? 180 : 0 }}
            transition={flipTransition}
          >
            <div className="card-face">{panel}</div>
            <div className="card-face card-face--back">{panel}</div>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  )
}

export default ClickyBox
