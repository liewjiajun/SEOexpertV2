'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { CTA, SITE_CONFIG } from '@/lib/constants';

export function CTAFooter() {
  return (
    <section className="section">
      <Container>
        <AnimatedSection>
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 rounded-card p-8 md:p-12 lg:p-16 text-center">
            {/* Animated background blobs */}
            <FloatingBlob
              color="violet"
              size="lg"
              className="-top-20 -left-20 opacity-40"
              animationDelay="0s"
            />
            <FloatingBlob
              color="fuchsia"
              size="md"
              className="-bottom-16 -right-16 opacity-30"
              animationDelay="3s"
            />

            {/* Floating decorative elements */}
            <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-white/30 animate-float" />
            <div className="absolute bottom-12 left-16 w-3 h-3 rounded-full bg-white/20 animate-float animation-delay-2000" />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-white/25 animate-float animation-delay-1000" />

            <div className="relative z-10">
              <h2 className="text-white mb-4 text-balance">Ready to grow sustainably?</h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                No high-pressure sales calls. Just a conversation about your goals and how we might help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={CTA.primary.href}
                  size="lg"
                  glow
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  }
                  iconPosition="right"
                >
                  {CTA.primary.text}
                </Button>
                <Button
                  href={`mailto:${SITE_CONFIG.email}`}
                  variant="ghost"
                  size="lg"
                  className="text-white/90 border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
                >
                  Or email us
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
