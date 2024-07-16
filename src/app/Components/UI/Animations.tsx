export const mainPageFadeInTransition = {
  initial: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: { 
      duration: 0.5
    }
  },
  animate: { 
    opacity: 1, 
    transition: { 
      opacity: { 
        duration: 0.2, 
        ease: "easeInOut",
      }
    }
  }
}

export const fadeInTransition = {
    initial: { opacity: 0 },
    exit: {
      opacity: 0,
      transition: { 
        duration: 1
      }
    },
    animate: { 
      opacity: 1, 
      transition: { 
        opacity: { 
          duration: 0.6, 
          ease: "easeInOut",
          delay: 0.2
        }
      }
    }
}

export const hoverTransition = { 
    duration: 0.5, 
    type: "spring", 
    damping: 10, 
    mass: 0.75, 
    stiffness: 100 
}

export const slideLeft = {
  initial: { x: "200px", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      delay: 0.3,
      type: "spring",
      ease: "easeInOut",
      stiffness: 120,
      damping: 15,
      mass: 1.5,
      duration: 1.5,
      opacity: { 
        duration: 1.5, ease: "easeInOut" 
      }
    }
  }
}

export const slideRight = {
  initial: { x: "-200px", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1, 
    transition: { 
      delay: 0.3,
      type: "spring",
      ease: "easeInOut",
      stiffness: 120,
      damping: 15,
      mass: 1.5,
      duration: 1.5,
      opacity: { 
        duration: 1.5, ease: "easeInOut" 
      }
    }
  }
}