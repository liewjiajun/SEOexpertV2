'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { CTA } from '@/lib/constants'

function HeroBackground(): JSX.Element {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-900">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-600/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
    </div>
  )
}

interface WavyTextProps {
  text: string
  className?: string
}

function WavyText({ text, className = '' }: WavyTextProps): JSX.Element {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            delay: index * 0.05,
            ease: 'easeInOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

function ScrollIndicator(): JSX.Element {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="h-14 w-8 rounded-full border-2 border-white/20 p-2 flex justify-center">
        <motion.div
          className="h-3 w-3 rounded-full bg-gradient-to-b from-blue-500 to-green-500"
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
      </div>
      <p className="text-white/40 text-xs mt-2 text-center">Scroll</p>
    </motion.div>
  )
}

export function HeroImmersive(): JSX.Element {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-slate-900">
      <HeroBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y, opacity }}
      >
        <Container className="text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="eyebrow mb-6 inline-block">
              Digital Marketing Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-normal mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <WavyText text="Best Digital Marketing" className="block text-white mb-2" />
            <span className="text-gradient">Agency in Singapore</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mx-auto max-w-3xl text-lg md:text-xl text-white/60 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            We help brands win in digital marketing with SEO, paid advertising, PPC, and social media marketing, designed for today&apos;s algorithm-driven landscape. Affordable digital marketing services focused on real results, delivered by a fully remote team.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MagneticButton href="/contact" variant="neon" size="lg">
              Get a free audit
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/40 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Long Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real Results</span>
            </div>
          </motion.div>
        </Container>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}
