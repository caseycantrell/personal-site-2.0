import type { Variants } from 'framer-motion'

export const mainPageFadeInTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { opacity: { duration: 0.2, ease: 'easeInOut' } },
  },
}

export const fadeInTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { opacity: { duration: 0.6, ease: 'easeInOut', delay: 0.2 } },
  },
}

export const hoverTransition = {
  duration: 0.5,
  type: 'spring',
  damping: 10,
  mass: 0.75,
  stiffness: 100,
}

/** scales an element while its nearest motion ancestor is hovered */
export const hoverScale = (scale: number): Variants => ({ hover: { scale } })

const slideIn = (from: string): Variants => ({
  initial: { x: from, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      type: 'spring',
      ease: 'easeInOut',
      stiffness: 120,
      damping: 15,
      mass: 1.5,
      duration: 1.5,
      opacity: { duration: 1.5, ease: 'easeInOut' },
    },
  },
})

export const slideLeft = slideIn('200px')
export const slideRight = slideIn('-200px')

export const staggerChildren = (staggerChildren: number): Variants => ({
  initial: {},
  animate: { transition: { staggerChildren } },
})

/** the desktop project list: titles drop in from the upper left.
 *  No color keyframes -- framer writes those as an inline style that outranks
 *  the selected-item class, which would pin every title to black forever. */
export const fallInFlash: Variants = {
  initial: { y: -200, x: -100, opacity: 0 },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      mass: 0.5,
      duration: 0.2,
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
}

export const fallIn: Variants = {
  initial: { y: -75, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 125,
      damping: 8,
      mass: 0.5,
      duration: 0.2,
      opacity: { duration: 0.8, ease: 'easeInOut' },
    },
  },
}

export const fallInSoft: Variants = {
  initial: { y: -60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      mass: 0.75,
      duration: 0.1,
      opacity: { duration: 0.75, ease: 'easeInOut' },
    },
  },
}
