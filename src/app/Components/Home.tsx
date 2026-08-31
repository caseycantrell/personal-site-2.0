import { motion } from 'framer-motion'
import Panel from './UI/Panel'
import { slideLeft, slideRight } from './UI/Animations'
import type { PanelProps } from './UI/panels'

const Home = ({ onNavigate }: PanelProps) => (
  <Panel current="home" onNavigate={onNavigate}>
    <div className="flex flex-col col-span-5 justify-center items-center lg:items-start lg:pl-24 px-8 mt-16 lg:mt-0">
      <motion.h1 variants={slideLeft} className="text-5xl lg:text-[5.25rem] font-bold tracking-[-0.035em] leading-[0.95] text-ink text-center lg:text-left">
        Casey
        <br />
        Cantrell
      </motion.h1>
      <motion.div variants={slideRight} className="mt-5 flex items-center gap-4">
        <span className="hidden lg:block h-px w-14 bg-accent/45" />
        <p className="eyebrow text-[10px] lg:text-xs text-accent">Full-Stack Software Engineer</p>
      </motion.div>
      <motion.p variants={slideRight} className="mt-5 max-w-md text-sm lg:text-base text-ink-soft leading-relaxed text-center lg:text-left">
        Austin, TX. Four years shipping production web applications, currently on a
        distributed team building a geospatial inspection platform for utility infrastructure.
      </motion.p>
    </div>
  </Panel>
)

export default Home
