'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechStart Inc.',
    quote: 'SEOExpert transformed our online presence. We saw a 300% increase in organic traffic within 6 months. Their remote team is incredibly responsive and results-driven.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Marcus Johnson',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    quote: 'The best decision we made was partnering with SEOExpert. They understand the algorithm game better than anyone. Our ad spend ROI increased by 250%.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Digital Bloom',
    quote: 'Working with a remote team sounded risky, but SEOExpert proved it works. Clear communication, transparent reporting, and exceptional results.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'David Kim',
    role: 'COO',
    company: 'ScaleUp Ventures',
    quote: 'Their social media strategy put us on the map. From zero to 50K followers in 3 months with genuine engagement. No bots, just real growth.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Lisa Wang',
    role: 'Head of Growth',
    company: 'NextGen Commerce',
    quote: 'SEOExpert delivered what agencies twice their price couldn\u0027t. Their content strategy alone drove $2M in additional revenue.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
  },
]

interface StarRatingProps {
  rating?: number
}

function StarRating({ rating = 5 }: StarRatingProps): JSX.Element {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }, (_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-blue-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSwipe(): JSX.Element {
  return (
    <section className="py-24 bg-ink-800 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mt-4">
            What They&apos;re <span className="text-gradient">Saying</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[320px] md:max-w-[380px]">
            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: false,
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.name}>
                  <div className="bg-ink-800 border border-white/10 rounded-3xl p-8 text-left">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/30"
                      />
                      <div>
                        <div className="font-display font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-white/60">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-white/80 italic leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Rating */}
                    <StarRating />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        {/* Swipe hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-white/40 text-sm"
        >
          ← Swipe to see more →
        </motion.p>
      </Container>
    </section>
  )
}
