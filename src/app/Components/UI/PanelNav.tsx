import { motion } from 'framer-motion'
import { PANELS, type PanelId } from './panels'

interface PanelNavProps {
  current: PanelId
  onNavigate: (id: PanelId) => void
  tight?: boolean
}

const PanelNav = ({ current, onNavigate, tight = false }: PanelNavProps) => (
  <nav
    aria-label="Sections"
    className={`grid grid-cols-2 lg:flex lg:flex-col ${tight ? 'gap-y-5 py-6' : 'gap-y-6 py-8'} lg:gap-y-6 lg:py-0 items-center lg:items-end justify-center lg:pr-10`}
  >
    {PANELS.filter(panel => panel.id !== current).map(panel => (
      <motion.button
        key={panel.id}
        type="button"
        whileHover={{ x: -5 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        onClick={() => onNavigate(panel.id)}
        className="py-1 text-[13px] lg:text-sm font-semibold uppercase tracking-[0.07em] text-ink-soft hover:text-accent transition-colors duration-200"
      >
        {panel.label}
      </motion.button>
    ))}
  </nav>
)

export default PanelNav
