import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { VALUES, CTA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SEOExpert - a remote-first digital marketing agency that believes in work-life balance and delivering real results.',
};

const teamCultureImages = [
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    alt: 'Team collaboration in a modern space',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    alt: 'Working from a cafe',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80',
    alt: 'Creative workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    alt: 'Remote work setup',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" animationDelay="0s" />
        <FloatingBlob color="fuchsia" size="lg" className="bottom-0 -left-20 opacity-15" animationDelay="3s" />

        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="eyebrow">About Us</p>
            <h1 className="mb-6">
              Marketing done <span className="text-gradient">differently</span>
            </h1>
            <p className="text-xl text-ink-secondary">
              We&apos;re a remote-first agency that proves you don&apos;t need rigid office hours
              and endless meetings to deliver exceptional results.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Story */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with gradient border */}
            <div className="relative animate-fade-in-up">
              <div className="relative h-[400px] md:h-[500px] rounded-card overflow-hidden p-[3px] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-coral">
                <div className="relative h-full w-full rounded-[15px] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 animate-bounce-hover" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-coral animate-float animation-delay-1000" />
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-3xl font-display mb-6">
                The <span className="text-gradient">story</span>
              </h2>
              <div className="space-y-4 text-ink-secondary">
                <p>
                  After spending years in traditional agencies—surrounded by unnecessary meetings,
                  rigid schedules, and a culture that measured success by hours at your desk rather
                  than outcomes—I knew something had to change.
                </p>
                <p>
                  I started SEOExpert with a simple belief: great marketing doesn&apos;t require a
                  9-to-5 office presence. It requires talented people, clear goals, and the freedom
                  to do their best work on their own terms.
                </p>
                <p>
                  Today, our team works from coffee shops in Bali, apartments in Lisbon, and home
                  offices across the globe. We&apos;re connected by shared values and a commitment to
                  delivering real results—not by a physical location.
                </p>
                <p>
                  The result? Happier team members, better work, and clients who get marketing that
                  actually moves the needle.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-fuchsia-50/50" />

        <Container className="relative z-10">
          <div className="section-header animate-fade-in-up">
            <p className="eyebrow">Our Values</p>
            <h2 className="text-balance mb-4">
              What we <span className="text-gradient">believe</span>
            </h2>
            <p className="text-ink-secondary">
              These aren&apos;t just words on a wall. They&apos;re how we actually work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((value, index) => (
              <div
                key={value.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="glass" hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 md:min-h-[56px] flex items-center">{value.title}</h3>
                      <p className="text-ink-secondary">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Culture */}
      <section className="section">
        <Container>
          <div className="section-header animate-fade-in-up">
            <p className="eyebrow">Life at SEOExpert</p>
            <h2 className="text-balance mb-4">
              No suits. No cubicles. <span className="text-gradient">No BS.</span>
            </h2>
            <p className="text-ink-secondary">
              We work from wherever we do our best work. Here&apos;s what that looks like.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamCultureImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-card overflow-hidden p-[2px] bg-gradient-to-br from-violet-400 via-fuchsia-400 to-coral hover:shadow-glow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full w-full rounded-[16px] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '5+', label: 'Countries we work from' },
              { value: '0', label: 'Physical offices' },
              { value: '100%', label: 'Remote forever' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in-up group"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <p className="text-4xl font-display text-gradient-animated mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </p>
                <p className="text-ink-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-coral rounded-card p-8 md:p-12 text-center animate-fade-in-up">
            {/* Floating elements */}
            <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-white/30 animate-float" />
            <div className="absolute bottom-8 left-12 w-2 h-2 rounded-full bg-white/20 animate-float animation-delay-2000" />

            <div className="relative z-10">
              <h2 className="text-white mb-4">Want to work with us?</h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Whether you&apos;re looking to hire us or join the team, we&apos;d love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={CTA.primary.href} size="lg" className="bg-white text-violet-600 hover:bg-white/90 hover:shadow-glow-lg">
                  Work with us
                </Button>
                <Button href="/contact" variant="ghost" size="lg" className="text-white/90 border-2 border-white/30 hover:bg-white/10 hover:border-white/50">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
