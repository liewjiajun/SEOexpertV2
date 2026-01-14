import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FloatingBlob } from '@/components/ui/FloatingElements';
import { SERVICE_DETAILS } from '@/data/services';
import { SERVICES, CTA } from '@/lib/constants';

type ServiceSlug = keyof typeof SERVICE_DETAILS;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug as ServiceSlug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICE_DETAILS[slug as ServiceSlug];
  const serviceInfo = SERVICES.find((s) => s.slug === slug);

  if (!service || !serviceInfo) {
    notFound();
  }

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section relative overflow-hidden">
        <FloatingBlob color="violet" size="xl" className="-top-32 -right-32 opacity-20" animationDelay="0s" />
        <FloatingBlob color="fuchsia" size="lg" className="bottom-0 -left-20 opacity-15" animationDelay="3s" />

        <Container className="relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <nav className="flex items-center gap-2 text-sm mb-6">
              <Link href="/services" className="text-violet-600 hover:text-fuchsia-500 transition-colors">
                Services
              </Link>
              <span className="text-muted">/</span>
              <span className="text-ink font-medium">{service.shortTitle}</span>
            </nav>
            <h1 className="mb-6">
              <span className="text-gradient">{service.title}</span>
            </h1>
            <p className="text-xl text-ink-secondary mb-8">{service.longDescription}</p>
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
        </Container>
      </section>

      {/* Features */}
      <section className="pb-16 md:pb-24">
        <Container>
          <h2 className="text-2xl font-display mb-8 animate-fade-in-up">
            What&apos;s <span className="text-gradient">included</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="glass" hover className="h-full group">
                  <div className="w-10 h-10 rounded-xl icon-gradient flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-shadow">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-violet-600 transition-colors">{feature.title}</h3>
                  <p className="text-sm text-ink-secondary">{feature.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-fuchsia-50/50" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-display mb-8 text-center animate-fade-in-up">
              Our <span className="text-gradient">process</span>
            </h2>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full icon-gradient text-white flex items-center justify-center font-medium shadow-glow-sm">
                      {step.step}
                    </div>
                    {index < service.process.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-violet-400 to-fuchsia-400 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-medium mb-1">{step.title}</h3>
                    <p className="text-ink-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other Services */}
      <section className="section">
        <Container>
          <h2 className="text-2xl font-display mb-8 animate-fade-in-up">
            Other <span className="text-gradient">services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s, index) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="glass" hover className="h-full group">
                  <h3 className="text-lg font-medium mb-2 group-hover:text-gradient transition-all">{s.shortTitle}</h3>
                  <p className="text-sm text-ink-secondary mb-4">{s.description}</p>
                  <span className="text-violet-600 text-sm font-medium inline-flex items-center group-hover:text-fuchsia-500 transition-colors">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-fuchsia-500 to-coral rounded-card p-8 md:p-12 lg:p-16 text-center animate-fade-in-up">
            {/* Floating elements */}
            <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-white/30 animate-float" />
            <div className="absolute bottom-8 left-12 w-2 h-2 rounded-full bg-white/20 animate-float animation-delay-2000" />
            <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-white/10 animate-bounce-hover" />

            <div className="relative z-10">
              <h2 className="text-white mb-4">
                Ready to improve your {service.shortTitle.toLowerCase()}?
              </h2>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Let&apos;s discuss how we can help you achieve your goals.
              </p>
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
          </div>
        </Container>
      </section>
    </>
  );
}
