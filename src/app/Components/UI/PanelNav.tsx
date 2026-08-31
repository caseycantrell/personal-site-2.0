import { motion } from 'framer-motion'
import { PANELS, type PanelId } from './panels'

interface PanelNavProps {
  current: PanelId
  onNavigate: (id: PanelId) => void
  /** projects has more to fit, so its mobile nav sits a little tighter */
  tight?: boolean
}

const PanelNav = ({ current, onNavigate, tight = false }: PanelNavProps) => (
  <div className={`grid grid-cols-2 lg:flex lg:flex-col ${tight ? 'gap-y-6 py-6' : 'gap-y-8 py-8'} lg:gap-y-4 lg:py-0 items-center justify-center space-y-0 lg:space-y-16 text-xl font-extrabold`}>
    {PANELS.filter(panel => panel.id !== current).map(panel => (
      <motion.button
        key={panel.id}
        type="button"
        whileHover={{ scale: 1.125 }}
        onClick={() => onNavigate(panel.id)}
        className="mx-8 lg:mx-0 py-3 lg:py-0 rounded-lg lg:hover:text-gray-200 transition-colors duration-500 ease-in-out"
      >
        {panel.label}
      </motion.button>
    ))}
  </div>
)

export default PanelNav
