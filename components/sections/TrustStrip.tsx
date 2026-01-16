'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const credibilityPoints = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data-Driven Digital Marketing Strategies',
    description: 'Every SEO and advertising decision is backed by real data, not guesswork or gut feel.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'White-Hat SEO & Advertising',
    description: 'We focus on sustainable, compliant SEO and digital advertising that supports long-term growth.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Clear Reporting from a Trusted Digital Marketing Agency',
    description: 'Transparent reporting with meaningful insights. No vanity metrics, just results that matter.',
  },
];

export function TrustStrip() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-fuchsia-50/50 to-violet-50" />
      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/30" />

      <Container className="relative z-10">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display text-ink">
            A Strategy-Led <span className="text-gradient">Digital Marketing Agency</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {credibilityPoints.map((point, index) => (
            <AnimatedSection key={point.title} delay={index * 100} animation="pop-in">
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-xl icon-gradient flex items-center justify-center group-hover:shadow-glow-sm transition-shadow duration-300 mb-4">
                  {point.icon}
                </div>
                <p className="font-semibold text-ink group-hover:text-violet-600 transition-colors mb-2 md:min-h-[56px] flex items-center justify-center text-center">{point.title}</p>
                <p className="text-sm text-muted">{point.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
