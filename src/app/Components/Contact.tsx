import Image from 'next/image'
import { motion } from 'framer-motion'
import Panel from './UI/Panel'
import { hoverScale, hoverTransition } from './UI/Animations'
import type { PanelProps } from './UI/panels'

const contactRows = [
  { icon: '/icons/location.png', alt: 'Pin', label: 'Location:', value: 'Austin, TX', href: 'https://www.google.com/maps/place/Austin,+TX/', external: true, muted: true },
  { icon: '/icons/phone.png', alt: 'Phone', label: 'Call/Text:', value: '(816) 718-7749', href: 'tel:+18167187749' },
  { icon: '/icons/email.png', alt: 'Email', label: 'Email:', value: 'cantrellcasey@gmail.com', href: 'mailto:cantrellcasey@gmail.com' },
  { icon: '/icons/linkedin.png', alt: 'LinkedIn', label: 'LinkedIn:', value: 'Casey Cantrell', href: 'https://www.linkedin.com/in/cantrellcasey/', external: true },
  { icon: '/icons/github.png', alt: 'GitHub', label: 'GitHub:', value: 'caseycantrell', href: 'https://github.com/caseycantrell', external: true },
]

const Contact = ({ onNavigate }: PanelProps) => (
  <Panel current="contact" onNavigate={onNavigate} showSocials={false}>
    <div className="col-span-5">
      <div className="flex flex-col lg:grid lg:grid-cols-3 h-full items-center">
        <div className="col-span-2">
          <p className="px-12 lg:px-24 mt-2 lg:mt-0 text-2xl lg:text-6xl font-extrabold">
            Thanks for stopping by. Feel free to reach out and I&apos;ll get in touch with you expeditiously.
          </p>
        </div>
        <div className="flex flex-col col-span-1 space-y-6 lg:space-y-10 ml-0 lg:ml-4 mt-12 lg:mt-0">
          {contactRows.map(({ icon, alt, label, value, href, external, muted }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              whileHover="hover"
              className="flex flex-row items-center cursor-pointer"
            >
              <motion.div variants={hoverScale(1.1)} transition={hoverTransition}>
                <Image src={icon} width={40} height={40} alt={alt} />
              </motion.div>
              <div className="flex flex-col ml-6">
                <p className="text-lg font-bold">{label}</p>
                <p className={`text-md font-semibold${muted ? ' text-gray-900' : ''}`}>{value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </Panel>
)

export default Contact
