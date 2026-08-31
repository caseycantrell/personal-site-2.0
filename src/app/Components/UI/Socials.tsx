import Icon, { type IconName } from './Icon'

const socials: { href: string, icon: IconName, label: string }[] = [
  { href: 'mailto:cantrellcasey@gmail.com', icon: 'mail', label: 'Email' },
  { href: 'https://www.linkedin.com/in/cantrellcasey/', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://github.com/caseycantrell', icon: 'github', label: 'GitHub' },
]

const Socials = () => (
  <div className="absolute top-6 right-6 hidden lg:flex flex-row items-center gap-x-5">
    {socials.map(({ href, icon, label }) => (
      <a
        key={label}
        href={href}
        target={href.startsWith('mailto:') ? undefined : '_blank'}
        aria-label={label}
        className="text-ink-faint hover:text-accent transition-colors duration-300"
      >
        <Icon name={icon} size={18} />
      </a>
    ))}
  </div>
)

export default Socials
