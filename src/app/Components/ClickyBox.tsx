'use client'

import { useState, type ComponentType } from 'react'
import { motion, MotionConfig, useAnimationControls } from 'framer-motion'
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

// Deliberately fast through the middle. The card is near edge-on around 90deg
// and every millisecond spent there is a frame of near-collapsed card, so the
// ease loiters at the ends and crosses the midpoint quickly.
const FLIP_SECONDS = 0.75
const flipTransition = { duration: FLIP_SECONDS, ease: [0.85, 0, 0.15, 1] as const }

// A flat plane turning in 3D has to pass through edge-on, and that frame is
// full width with no height -- the "collapsed but way wider" flash. There is no
// geometry that avoids it (real thickness z-fights in CSS 3D), so the card is
// blanked for ~60ms across the crossing and the frame is simply never drawn.
const blankAcrossEdge = {
  opacity: [1, 1, 0, 1, 1],
  transition: { duration: FLIP_SECONDS, times: [0, 0.46, 0.5, 0.54, 1], ease: 'linear' as const },
}

const ClickyBox = () => {
  const [frontPanel, setFrontPanel] = useState<PanelId>('home')
  const [backPanel, setBackPanel] = useState<PanelId>('home')
  const [isFlipped, setIsFlipped] = useState(false)
  const isMobile = useIsMobile()
  const stage = useAnimationControls()

  // Load the incoming panel onto whichever face is currently hidden. If both
  // faces rendered the same panel the content would swap on click and the
  // rotation would reveal what you were already looking at.
  const handleNavigate = (id: PanelId) => {
    if (isFlipped) setFrontPanel(id)
    else setBackPanel(id)
    setIsFlipped(flipped => !flipped)
    stage.start(blankAcrossEdge)
  }

  const FrontPanel = PANEL_COMPONENTS[frontPanel]
  const BackPanel = PANEL_COMPONENTS[backPanel]

  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        initial="initial"
        animate="animate"
        variants={mainPageFadeInTransition}
        className="card-viewport"
      >
        <motion.div className="card-stage" animate={stage}>
          <motion.div
            className="card-pivot"
            animate={{ [isMobile ? 'rotateY' : 'rotateX']: isFlipped ? 180 : 0 }}
            transition={flipTransition}
          >
            <div className="card-face">
              <FrontPanel onNavigate={handleNavigate} />
            </div>
            <div className="card-face card-face--back">
              <BackPanel onNavigate={handleNavigate} />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export default ClickyBox
