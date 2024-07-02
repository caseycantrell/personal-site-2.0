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
  return (
    <motion.div 
      key={title}
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="w-screen lg:w-full h-full flex flex-col items-center justify-center p-8 lg:p-16"
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
          layout="fill" 
          style={{ objectFit: 'cover' }}  
          alt="Project Image" 
          placeholder="blur" 
          blurDataURL={previewPicture}  
        />
      </motion.a>
      <motion.div  
        variants={fallInVariants}
        className="flex flex-row items-center gap-x-16 lg:gap-x-6 mt-8"
      >
        <div className="flex flex-col items-center">
          <motion.a 
            whileHover={{ scale: 1.08 }} 
            transition={hoverTransition} 
            href={siteLink} 
            className="cursor-pointer flex flex-col items-center" 
            target="_blank"
          >
            <Image src={'/icons/link.png'} width={30} height={30} alt="Link" />
          </motion.a>
          <motion.p variants={fallInVariants} className="font-semibold text-sm">site</motion.p>
        </div>

        <div className="flex flex-col items-center">
          <motion.a 
            whileHover={{ scale: 1.08 }} 
            transition={hoverTransition} 
            href={githubLink} 
            className="cursor-pointer flex flex-col items-center" 
            target="_blank"
          >
            <Image src={'/icons/github.png'} width={30} height={30} alt="GitHub" className="butt"/>
          </motion.a>
          <motion.p variants={fallInVariants} className="font-semibold text-sm">repo</motion.p>
        </div>
      </motion.div>
      <style>{`
        .project-image-container {
          width: 425px;
          height: 225px;
        }          
        @media (max-width: 1024px) {
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
