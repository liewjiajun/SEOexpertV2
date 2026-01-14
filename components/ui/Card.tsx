import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient-border' | 'neon';
  hover?: boolean;
  animated?: boolean;
}

const variants = {
  default: [
    'bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm',
    'border border-white/50 dark:border-slate-700/50',
    'shadow-card',
  ].join(' '),
  glass: [
    'backdrop-blur-glass bg-white/60 dark:bg-slate-800/60',
    'border border-white/30 dark:border-white/10',
    'shadow-glass',
  ].join(' '),
  'gradient-border': [
    'relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm',
    // Gradient border using pseudo-element
    'before:absolute before:inset-0 before:-z-10',
    'before:p-[1.5px] before:rounded-[20px]',
    'before:bg-gradient-to-br before:from-blue-500 before:via-blue-400 before:to-green-500',
    'before:-m-[1.5px]',
  ].join(' '),
  neon: [
    'bg-slate-900/90 backdrop-blur-sm',
    'border border-blue-500/30',
    'shadow-glow-sm',
  ].join(' '),
};

export function Card({
  children,
  className,
  variant = 'default',
  hover = false,
  animated = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card p-6 md:p-8',
        variants[variant],
        hover && [
          'transition-all duration-300 ease-out',
          'hover:-translate-y-2 hover:shadow-card-hover',
          'hover:border-blue-200 dark:hover:border-blue-700',
        ],
        animated && 'animate-fade-in-up',
        className
      )}
    >
      {children}
    </div>
  );
}
