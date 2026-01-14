'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detect touch device
    const isTouchCapable = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouchCapable)

    if (isTouchCapable) return

    // Add custom cursor class to html
    document.documentElement.classList.add('has-custom-cursor')

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]')
      setIsHovering(!!isInteractive)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousemove', handleElementHover)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousemove', handleElementHover)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border-2 border-violet-500 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          marginLeft: isHovering ? -24 : -16,
          marginTop: isHovering ? -24 : -16,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          width: { type: 'spring', stiffness: 300, damping: 20 },
          height: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
          scale: { type: 'spring', stiffness: 300, damping: 20 },
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-violet-500"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: 'spring', stiffness: 300, damping: 20 },
        }}
      />
    </>
  )
}
