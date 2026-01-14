'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useMotionValue, animate } from 'framer-motion'
import { Container } from '@/components/ui/Container'

interface StatItem {
  value: number
  suffix: string
  label: string
}

interface AnimatedCounterProps {
  value: number
  suffix: string
}

function AnimatedCounter({ value, suffix }: AnimatedCounterProps): JSX.Element {
  const motionValue = useMotionValue(0)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 2,
      ease: 'easeOut',
    })
    return controls.stop
  }, [motionValue, value])

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (v) => {
      setDisplayValue(Math.round(v))
    })
    return unsubscribe
  }, [motionValue])

  return (
    <span>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

const STATS: StatItem[] = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 12, suffix: 'M+', label: 'Revenue Generated' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 50, suffix: '+', label: 'Team Members' },
]

export function StatsWithConfetti(): JSX.Element {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <section ref={ref} className="relative py-24 bg-ink-900 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-600/20 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Our Impact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mt-4">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: 'spring' as const,
                stiffness: 100,
                damping: 15,
                delay: i * 0.1,
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-2">
                {inView && <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
