import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface ProjectShowProps {
  title: string
  description: string
  siteLink: string
  githubLink: string
  previewPicture: string
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const fallInVariants = {
  initial: { y: -60, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.75,
      duration: 0.1,
      opacity: { 
        duration: 0.75, ease: "easeInOut" 
      }
    }
  }
}

const ProjectShow = ({ title, description, siteLink, githubLink, previewPicture }: ProjectShowProps) => {
  const [ siteLinkHovered, setSiteLinkHovered ] = useState<boolean>(false)
  const [ repoLinkHovered, setRepoLinkHovered ] = useState<boolean>(false)

  return (
    <motion.div 
      key={title}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="w-full h-full flex flex-col items-center justify-center p-8 lg:p-16"
    >
      <motion.p 
        variants={fallInVariants} 
        className="text-4xl font-extrabold"
      >
        {title}
      </motion.p>
      <motion.p 
        variants={fallInVariants} 
        className="flex flex-row items-center justify-center text-sm lg:text-lg font-semibold mt-0 h-28"
      >
        {description}
      </motion.p>
      <motion.a 
        href={siteLink} 
        target="_blank"
        variants={fallInVariants} 
        className="mt-2 relative flex justify-center project-image-container"
      >
        <Image 
          src={previewPicture} 
          className="rounded-md"
          fill={true}
          style={{ objectFit: 'cover' }}
          sizes="(min-width: 1200px) 325px, (max-width: 1199px) 425px, 425px"
          alt="Project Image" 
          placeholder="blur" 
          blurDataURL={previewPicture}  
        />
      </motion.a>
      <motion.div  
        variants={fallInVariants}
        className="flex flex-row items-center gap-x-16 lg:gap-x-6 mt-8"
      >
        <div onMouseEnter={() => setSiteLinkHovered(true)} onMouseLeave={() => setSiteLinkHovered(false)} className="flex flex-col items-center cursor-pointer ">
          <a 
            href={siteLink} 
            target="_blank"
          >
            <motion.div animate={{ scale: siteLinkHovered ? 1.125 : 1 }}>
              <Image src={'/icons/link.png'} width={30} height={30} alt="Site Link" />
            </motion.div>
          <motion.p variants={fallInVariants} className="font-semibold text-sm mt-1">site</motion.p>
          </a>
        </div>
        <div onMouseEnter={() => setRepoLinkHovered(true)} onMouseLeave={() => setRepoLinkHovered(false)} className="flex flex-col items-center cursor-pointer ">
          <a 
            href={githubLink} 
            target="_blank"
          >
            <motion.div animate={{ scale: repoLinkHovered ? 1.125 : 1 }}>
              <Image src={'/icons/github.png'} width={30} height={30} alt="Repo Link" />
            </motion.div>
          <motion.p variants={fallInVariants} className="font-semibold text-sm mt-1">repo</motion.p>
          </a>
        </div>
      </motion.div>
      <style>{`
        .project-image-container {
          width: 425px;
          height: 225px;
        }          
        @media (max-width: 1200px) {
          .project-image-container {
            width: 325px;
            height: 175px;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ProjectShow
