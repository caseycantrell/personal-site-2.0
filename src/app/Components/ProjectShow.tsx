import { motion } from 'framer-motion'
import Image from 'next/image'
import Icon, { type IconName } from './UI/Icon'
import { staggerChildren, fallInSoft } from './UI/Animations'
import type { Project } from './Projects'

const IconLink = ({ href, icon, label }: { href: string, icon: IconName, label: string }) => (
  <a
    href={href}
    target="_blank"
    className="eyebrow flex items-center gap-2 text-[10px] text-ink-soft hover:text-accent transition-colors duration-300"
  >
    <Icon name={icon} size={15} />
    {label}
  </a>
)

const ProjectShow = ({ title, description, siteLink, githubLink, previewPicture }: Project) => (
  <motion.div
    key={title}
    initial="initial"
    animate="animate"
    variants={staggerChildren(0.08)}
    className="w-full h-full flex flex-col items-center justify-center px-8 py-10 lg:px-14"
  >
    <motion.p variants={fallInSoft} className="text-2xl lg:text-3xl font-bold tracking-tight text-ink text-center">
      {title}
    </motion.p>
    <motion.p variants={fallInSoft} className="mt-3 min-h-[5.5rem] max-w-lg text-center text-sm text-ink-soft leading-relaxed">
      {description}
    </motion.p>
    <motion.a
      href={siteLink}
      target="_blank"
      variants={fallInSoft}
      className="mt-2 relative flex justify-center project-preview overflow-hidden rounded-lg ring-1 ring-black/10 shadow-lg"
    >
      <Image
        src={previewPicture}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 1200px) 325px, 425px"
        alt={`Screenshot of the ${title} project`}
        placeholder="blur"
      />
    </motion.a>
    <motion.div variants={fallInSoft} className="flex flex-row items-center gap-x-8 mt-6">
      <IconLink href={siteLink} icon="external" label="site" />
      <IconLink href={githubLink} icon="github" label="repo" />
    </motion.div>
  </motion.div>
)

export default ProjectShow
