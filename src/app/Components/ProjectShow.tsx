import { motion } from 'framer-motion'
import Image from 'next/image'
import { staggerChildren, fallInSoft, hoverScale, hoverTransition } from './UI/Animations'
import type { Project } from './Projects'

const IconLink = ({ href, icon, label }: { href: string, icon: string, label: string }) => (
  <motion.a href={href} target="_blank" whileHover="hover" className="flex flex-col items-center cursor-pointer">
    <motion.div variants={hoverScale(1.125)} transition={hoverTransition}>
      <Image src={icon} width={30} height={30} alt="" />
    </motion.div>
    <motion.p variants={fallInSoft} className="font-semibold text-sm mt-1">{label}</motion.p>
  </motion.a>
)

const ProjectShow = ({ title, description, siteLink, githubLink, previewPicture }: Project) => (
  <motion.div
    key={title}
    initial="initial"
    animate="animate"
    variants={staggerChildren(0.08)}
    className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-16"
  >
    <motion.p variants={fallInSoft} className="text-4xl font-extrabold">{title}</motion.p>
    <motion.p variants={fallInSoft} className="flex flex-row items-center justify-center text-sm lg:text-lg font-semibold mt-0 h-28">
      {description}
    </motion.p>
    <motion.a
      href={siteLink}
      target="_blank"
      variants={fallInSoft}
      className="mt-2 relative flex justify-center project-preview"
    >
      <Image
        src={previewPicture}
        className="rounded-md"
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 1200px) 325px, 425px"
        alt={`Screenshot of the ${title} project`}
        placeholder="blur"
      />
    </motion.a>
    <motion.div variants={fallInSoft} className="flex flex-row items-center gap-x-16 lg:gap-x-6 mt-8">
      <IconLink href={siteLink} icon="/icons/link.png" label="site" />
      <IconLink href={githubLink} icon="/icons/github.png" label="repo" />
    </motion.div>
  </motion.div>
)

export default ProjectShow
