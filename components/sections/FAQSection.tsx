'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is digital marketing?',
    answer: 'Digital marketing helps businesses grow online through channels like SEO, paid advertising, PPC, and social media marketing. At SEOExpert, we see digital marketing as a growth engine, not a checklist of tactics.',
  },
  {
    question: 'Will digital marketing work for my business?',
    answer: 'Yes. Digital marketing works across industries and business sizes. With the right strategy, SEO and digital advertising can drive visibility, leads, and long-term growth.',
  },
  {
    question: 'What does a digital marketing agency do?',
    answer: 'A digital marketing agency handles strategy, execution, and optimisation across channels like SEO, advertising, and social media. We make sure your marketing efforts are aligned with your business goals and delivering measurable results.',
  },
  {
    question: 'What digital marketing services do you offer?',
    answer: 'SEOExpert is a full-service digital marketing agency offering SEO and organic search optimisation, PPC and paid advertising, social media marketing, and content and performance tracking. Everything is tailored to your goals, not copied from templates.',
  },
  {
    question: 'How can digital marketing help my business grow?',
    answer: 'Digital marketing supports growth through lead generation, brand visibility, and sales. Compared to traditional marketing, it is measurable, scalable, and easier to optimise in real time.',
  },
  {
    question: 'How much does digital marketing cost? Is it affordable?',
    answer: 'Costs depend on your industry, competition, and services required. SEO for a small business is far more affordable than running multi-platform advertising for a large brand. We focus on building affordable digital marketing solutions with clear pricing and no surprises.',
  },
  {
    question: 'Why hire a digital marketing agency instead of doing it myself?',
    answer: 'You can manage digital marketing yourself, but doing it well takes years of experience and constant learning. Working with an agency helps you move faster, avoid costly mistakes, and focus on running your business.',
  },
  {
    question: 'What makes SEOExpert different from other digital marketing agencies?',
    answer: 'SEOExpert is a remote-first, results-driven digital marketing agency. We focus on outcomes over hours, transparency over fluff, and strategies that actually perform. No long contracts. No agency nonsense.',
  },
  {
    question: 'How do I know which marketing channel is right for my business?',
    answer: 'SEO is great for long-term demand. PPC and paid advertising deliver faster, high-intent traffic. Social media advertising supports brand awareness and targeting. We help you choose the right mix instead of guessing.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'SEO usually takes three to six months to show impact. Paid advertising and PPC can generate results much faster. Most businesses benefit from combining short-term wins with long-term SEO growth.',
  },
  {
    question: 'Can I manage digital marketing in-house instead?',
    answer: 'Some businesses do. Working with a digital marketing agency gives you access to specialised experts, tools, and insights without the overhead of building a full team internally.',
  },
];

interface AccordionItemProps {
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function AccordionItem({ faq, isOpen, onClick, index }: AccordionItemProps) {
  return (
    <AnimatedSection delay={index * 50} animation="fade-up">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onClick}
          className="w-full py-6 flex items-center justify-between text-left group"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium text-ink dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors pr-4">
            {faq.question}
          </span>
          <span className={`flex-shrink-0 w-8 h-8 rounded-full icon-gradient flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="pb-6 text-ink-secondary leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section relative overflow-hidden bg-gray-50 dark:bg-ink-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-ink-900 dark:via-ink-800 dark:to-ink-900 pointer-events-none" />

      <Container className="relative z-10">
        <AnimatedSection className="section-header text-center mb-12">
          <span className="eyebrow">FAQs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-ink dark:text-white mt-4">
            Digital Marketing & Advertising <span className="text-gradient">FAQs</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
