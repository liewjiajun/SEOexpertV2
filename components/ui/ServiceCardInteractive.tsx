'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ServiceCardInteractiveProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
  index?: number
}

export function ServiceCardInteractive({
  title,
  description,
  icon,
  href,
  className,
  index = 0,
}: ServiceCardInteractiveProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['17.5deg', '-17.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-17.5deg', '17.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      className={cn('perspective-1000', className)}
    >
      <Link href={href}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: 'preserve-3d',
          }}
          className="group relative h-80 w-full rounded-2xl bg-gradient-to-br from-blue-500/10 to-green-500/10 p-[1px]"
        >
          <div
            className="h-full w-full rounded-2xl bg-ink-900 p-6 relative overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Floating Icon */}
            <motion.div
              className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500/20 to-green-500/20 p-3 backdrop-blur-sm border border-white/10"
              style={{ transform: 'translateZ(50px)' }}
            >
              <div className="w-6 h-6 text-blue-400">
                {icon}
              </div>
            </motion.div>

            {/* Content */}
            <div style={{ transform: 'translateZ(30px)' }}>
              <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gradient transition-colors">
                {title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {description}
              </p>
            </div>

            {/* Arrow indicator */}
            <motion.div
              className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors"
              style={{ transform: 'translateZ(40px)' }}
            >
              <svg
                className="w-5 h-5 text-white/40 group-hover:text-blue-400 transition-colors group-hover:translate-x-1 transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.div>

            {/* Hover Glow Effect */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 40%)',
              }}
            />

            {/* Border glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-green-500/20 blur-sm" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
