'use client';

import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { VALUES, ANTI_VALUES } from '@/lib/constants';

export function Differentiators() {
  return (
    <section className="section relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-white to-blue-50/50 dark:from-green-900/10 dark:via-slate-900 dark:to-blue-900/10" />

      <Container className="relative z-10">
        <AnimatedSection className="section-header">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="text-balance mb-4">
            Why Choose SEOExpert as Your <span className="text-gradient">Digital Marketing Agency</span> in Singapore
          </h2>
          <p className="text-ink-secondary">
            SEOExpert is built as a modern, results-driven digital marketing agency focused on real outcomes. Here&apos;s what sets us apart.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* What We Don't Believe In */}
          <AnimatedSection delay={100} animation="slide-right">
            <Card variant="default" className="h-full border-green-400/20 hover:border-green-400/40 transition-colors">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-400 text-white flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                What We Don&apos;t Believe In as a Digital Marketing Agency
              </h3>
              <ul className="space-y-4">
                {ANTI_VALUES.map((value, index) => (
                  <li key={value.title} className="group" style={{ animationDelay: `${index * 50}ms` }}>
                    <p className="font-medium text-ink dark:text-white mb-1 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                      {value.title}
                    </p>
                    <p className="text-sm text-ink-secondary pl-7">{value.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          {/* What We Stand For */}
          <AnimatedSection delay={200} animation="slide-left">
            <Card variant="glass" className="h-full border-blue-200/50 dark:border-blue-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-colors">
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <span className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                What We Stand For as a Digital Marketing Agency
              </h3>
              <ul className="space-y-4">
                {VALUES.map((value, index) => (
                  <li key={value.title} className="group" style={{ animationDelay: `${index * 50}ms` }}>
                    <p className="font-medium text-ink dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {value.title}
                    </p>
                    <p className="text-sm text-ink-secondary pl-7">{value.description}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
