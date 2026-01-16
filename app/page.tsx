import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { ServiceCards } from '@/components/sections/ServiceCards'
import { Differentiators } from '@/components/sections/Differentiators'
import { StatsWithConfetti } from '@/components/sections/StatsWithConfetti'
import { TestimonialsSwipe } from '@/components/sections/TestimonialsSwipe'
import { FounderSection } from '@/components/sections/FounderSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTAFooter } from '@/components/sections/CTAFooter'

export const metadata: Metadata = {
  title: 'Best Digital Marketing Agency in Singapore | SEOExpert',
  description: 'Looking for the best digital marketing agency in Singapore? SEOExpert offers affordable SEO, PPC, advertising, and social media solutions. Speak with us today.',
  alternates: {
    canonical: 'https://www.seoexpert.sg/',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceCards />
      <Differentiators />
      <StatsWithConfetti />
      <TestimonialsSwipe />
      <FounderSection />
      <FAQSection />
      <CTAFooter />
    </>
  )
}
