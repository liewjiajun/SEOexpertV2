import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { CTA } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Animated Background Blobs */}
      <FloatingBlob
        color="violet"
        size="xl"
        className="top-0 -left-48 opacity-20"
        animationDelay="0s"
      />
      <FloatingBlob
        color="fuchsia"
        size="lg"
        className="top-32 right-0 opacity-20"
        animationDelay="2s"
      />
      <FloatingBlob
        color="coral"
        size="md"
        className="bottom-0 left-1/3 opacity-15"
        animationDelay="4s"
      />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <Badge variant="gradient" className="mb-6" animated>
              Digital Marketing Agency
            </Badge>
            <h1 className="text-balance mb-6">
              Marketing that works,{' '}
              <span className="text-gradient-animated">from anywhere</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-secondary mb-8 max-w-lg">
              Results-driven digital marketing for businesses that value quality over hours.
              No corporate fluff. Just real growth.
            </p>

            <div className="mb-6">
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
            </div>

            <p className="text-sm text-muted">
              No long contracts. Clear deliverables. Work with a team that gets it.
            </p>
          </div>

          {/* Image */}
          <div className="relative lg:h-[500px] animate-fade-in-up animation-delay-200">
            {/* Gradient border wrapper */}
            <div className="relative h-[400px] lg:h-full rounded-card overflow-hidden p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-coral">
              <div className="relative h-full w-full rounded-[15px] overflow-hidden bg-background">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team working remotely from a modern cafe"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating glassmorphism card */}
            <div className="absolute bottom-6 left-6 right-6 glass-card p-4 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full icon-gradient flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">100% Remote Team</p>
                  <p className="text-xs text-violet-600">Working from 5+ countries</p>
                </div>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-bounce-hover" />
            <div className="absolute top-1/4 -left-3 w-4 h-4 rounded-full bg-coral animate-float animation-delay-1000" />
          </div>
        </div>
      </Container>
    </section>
  );
}
