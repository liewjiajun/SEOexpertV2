import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'neon' | 'glass';
  size?: 'sm' | 'md';
  className?: string;
  animated?: boolean;
}

const variants = {
  default: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  gradient: [
    'bg-gradient-to-r from-blue-600 via-blue-500 to-green-500',
    'text-white font-semibold',
    'shadow-sm',
  ].join(' '),
  outline: [
    'bg-transparent',
    'border border-blue-400 dark:border-blue-500 text-blue-600 dark:text-blue-400',
  ].join(' '),
  neon: [
    'bg-transparent',
    'border border-blue-500 text-blue-400',
    'shadow-glow-sm',
  ].join(' '),
  glass: [
    'backdrop-blur-sm bg-white/60 dark:bg-slate-800/60',
    'border border-white/40 dark:border-white/10',
    'text-blue-700 dark:text-blue-400',
  ].join(' '),
};

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3.5 py-1.5 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  animated = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        'transition-all duration-200',
        variants[variant],
        sizes[size],
        animated && 'animate-pop-in',
        className
      )}
    >
      {children}
    </span>
  );
}
