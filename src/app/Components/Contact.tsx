import { motion } from 'framer-motion'
import Panel from './UI/Panel'
import Icon, { type IconName } from './UI/Icon'
import type { PanelProps } from './UI/panels'

const contactRows: { icon: IconName, label: string, value: string, href: string, external?: boolean }[] = [
  { icon: 'pin', label: 'Location', value: 'Austin, TX', href: 'https://www.google.com/maps/place/Austin,+TX/', external: true },
  { icon: 'phone', label: 'Call / Text', value: '(816) 718-7749', href: 'tel:+18167187749' },
  { icon: 'mail', label: 'Email', value: 'cantrellcasey@gmail.com', href: 'mailto:cantrellcasey@gmail.com' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'Casey Cantrell', href: 'https://www.linkedin.com/in/cantrellcasey/', external: true },
  { icon: 'github', label: 'GitHub', value: 'caseycantrell', href: 'https://github.com/caseycantrell', external: true },
]

const Contact = ({ onNavigate }: PanelProps) => (
  <Panel current="contact" onNavigate={onNavigate} showSocials={false}>
    <div className="col-span-5 flex flex-col lg:grid lg:grid-cols-5 lg:gap-x-12 items-center justify-center px-8 lg:pl-24 lg:pr-12 py-8 lg:py-0">
      <div className="lg:col-span-2">
        <p className="eyebrow text-[10px] text-ink-faint mb-4">Contact</p>
        <p className="text-3xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.05] text-ink text-balance">
          Thanks for stopping by.
        </p>
        <p className="mt-4 text-sm lg:text-base text-ink-soft leading-relaxed max-w-sm">
          Feel free to reach out and I&apos;ll get in touch with you expeditiously.
        </p>
      </div>
      <div className="lg:col-span-3 flex flex-col w-full mt-10 lg:mt-0 divide-y divide-rule">
        {contactRows.map(({ icon, label, value, href, external }) => (
          <div key={label}>
            <motion.a
              href={href}
              target={external ? '_blank' : undefined}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group flex flex-row items-center gap-5 py-5 text-ink-soft hover:text-accent transition-colors duration-300"
            >
              <Icon name={icon} size={18} className="shrink-0 text-ink-faint group-hover:text-accent transition-colors duration-300" />
              <div className="flex flex-col">
                <span className="eyebrow text-[9px] text-ink-faint">{label}</span>
                <span className="text-sm lg:text-base font-medium">{value}</span>
              </div>
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  </Panel>
)

export default Contact
