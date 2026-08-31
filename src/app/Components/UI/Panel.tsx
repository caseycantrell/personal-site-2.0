import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Socials from './Socials'
import PanelNav from './PanelNav'
import { fadeInTransition } from './Animations'
import type { PanelId } from './panels'

interface PanelProps {
  current: PanelId
  onNavigate: (id: PanelId) => void
  /** contact lists the same links in the body, so it hides the corner set */
  showSocials?: boolean
  tightNav?: boolean
  children: ReactNode
}

const Panel = ({ current, onNavigate, showSocials = true, tightNav, children }: PanelProps) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={fadeInTransition}
    className="w-full h-full flex flex-col-reverse justify-end lg:grid lg:grid-cols-6 text-black relative"
  >
    {children}
    {showSocials && <Socials />}
    <PanelNav current={current} onNavigate={onNavigate} tight={tightNav} />
  </motion.div>
)

export default Panel
