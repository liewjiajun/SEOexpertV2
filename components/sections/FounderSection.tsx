'use client';

import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FloatingBlob } from '@/components/ui/FloatingElements';

export function FounderSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-green-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-green-900/10 pointer-events-none" />

      {/* Floating blob */}
      <FloatingBlob
        color="violet"
        size="lg"
        className="-bottom-20 -right-20 opacity-10"
        animationDelay="2s"
      />

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with gradient border */}
          <AnimatedSection animation="slide-right">
            <div className="relative">
              {/* Gradient border wrapper */}
              <div className="relative h-[400px] md:h-[500px] rounded-card overflow-hidden p-[3px] bg-gradient-to-br from-blue-500 via-blue-400 to-green-500">
                <div className="relative h-full w-full rounded-[15px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Founder working from a scenic location"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-green-500 animate-bounce-hover" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-green-400 animate-float animation-delay-1000" />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={200} animation="slide-left">
            <div>
              <p className="eyebrow">Meet the Founder of a Modern Digital Marketing Agency</p>
              <blockquote className="text-2xl md:text-3xl font-display text-ink mb-6 leading-snug">
                &ldquo;I started SEOExpert because I was done with traditional agency bosses who equate presence with performance and do not trust people to work from <span className="text-gradient">home</span>.&rdquo;
              </blockquote>
              <p className="text-ink-secondary mb-4">
                I believe in a digital nomad lifestyle. Work can happen in a Bangkok café or in a quiet ryokan in Kyoto while sipping a matcha latte. Location does not define output.
              </p>
              <p className="text-ink-secondary mb-6">
                Great SEO and digital marketing do not come from sitting in an office all day. They come from trust, focus, and the freedom to work where you do your best work.
              </p>

              <div className="mb-8">
                <p className="font-semibold text-ink mb-3">Best fit clients:</p>
                <ul className="space-y-3">
                  {[
                    'Businesses ready to invest in sustainable digital marketing growth',
                    'Founders looking for an experienced yet affordable digital marketing agency',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink-secondary group">
                      <span className="w-5 h-5 rounded-full icon-gradient flex items-center justify-center flex-shrink-0 group-hover:shadow-glow-sm transition-shadow">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="group-hover:text-ink transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href="/about"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                }
                iconPosition="right"
              >
                See what makes us different
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
