'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, MouseEvent } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'neon' | 'glass' | 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  magnetStrength?: number
}

export function MagneticButton({
  children,
  href,
  variant = 'neon',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
  magnetStrength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current || disabled) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    x.set(distanceX * magnetStrength)
    y.set(distanceY * magnetStrength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseStyles = cn(
    'relative inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900',
    {
      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',

      // Variants
      'bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white shadow-button hover:shadow-button-hover':
        variant === 'neon' || variant === 'primary',
      'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20':
        variant === 'glass',
      'bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700':
        variant === 'secondary',

      // Disabled
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  )

  const content = (
    <>
      {/* Shimmer effect */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      </span>

      {/* Glow effect for neon variant */}
      {variant === 'neon' && (
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
      )}

      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.div
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-block group"
      >
        <Link
          href={href}
          ref={ref as React.RefObject<HTMLAnchorElement>}
          className={baseStyles}
        >
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(baseStyles, 'group')}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  )
}
