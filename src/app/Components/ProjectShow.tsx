import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectShowProps {
  title: string
  description: string
  siteLink: string
  githubLink: string
  previewPicture: string
}

const hoverTransition = { 
  duration: 0.5, 
  type: "spring", 
  damping: 10, 
  mass: 0.75, 
  stiffness: 100 
}

const ProjectShow = ({ title, description, siteLink, githubLink, previewPicture }: ProjectShowProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-16">
      <p className="text-6xl font-extrabold">{title}</p>
      <p className="text-lg font-semibold mt-8">
        {description}
      </p>
      <div className="mt-6">
        <Image src={previewPicture} width={300} height={300} alt="Project Image" placeholder="blur" blurDataURL={previewPicture} />
      </div>
      <div className="flex flex-row items-center gap-x-6 mt-6">
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href={siteLink} className="cursor-pointer" target="_blank">
          <Image src={'/icons/link.png'} width={35} height={35} alt="Link" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.15 }} transition={hoverTransition} href={githubLink} className="cursor-pointer" target="_blank">
          <Image src={'/icons/github.png'} width={35} height={35} alt="Link" />
        </motion.a>
      </div>
    </div>
  )
}
  
export default ProjectShow
  