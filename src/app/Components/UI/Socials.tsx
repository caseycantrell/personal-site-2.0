import Image from 'next/image'
import { motion } from 'framer-motion'
import { hoverTransition } from './Animations'

const socials = [
  { href: 'mailto:cantrellcasey@gmail.com', icon: '/icons/email.png', label: 'Email' },
  { href: 'https://www.linkedin.com/in/cantrellcasey/', icon: '/icons/linkedin.png', label: 'LinkedIn' },
  { href: 'https://github.com/caseycantrell', icon: '/icons/github.png', label: 'GitHub' },
]

const Socials = () => (
  <div className="absolute top-4 right-4 hidden lg:flex flex-row items-center gap-x-3.5">
    {socials.map(({ href, icon, label }) => (
      <motion.a
        key={label}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        whileHover={{ scale: 1.125 }}
        transition={hoverTransition}
        className="cursor-pointer"
      >
        <Image src={icon} width={33} height={33} alt={label} />
      </motion.a>
    ))}
  </div>
)

export default Socials
