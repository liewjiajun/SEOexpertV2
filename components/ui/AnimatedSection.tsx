'use client'

import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'pop-in' | 'slide-left' | 'slide-right' | 'scale-in'
  delay?: number
  threshold?: number
  once?: boolean
  stagger?: boolean
}

const animations: Record<string, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  },
  'pop-in': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  },
  'slide-right': {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  },
  'scale-in': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  },
}

// Container variant for stagger effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  once = true,
  stagger = false,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  })

  const variants = stagger ? containerVariants : animations[animation]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={cn(className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      custom={delay / 1000}
    >
      {children}
    </motion.div>
  )
}

// Export stagger item for use with stagger containers
export function AnimatedItem({
  children,
  className,
  animation = 'fade-up',
}: {
  children: React.ReactNode
  className?: string
  animation?: keyof typeof animations
}) {
  return (
    <motion.div variants={animations[animation]} className={cn(className)}>
      {children}
    </motion.div>
  )
}
