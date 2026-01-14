import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'neon' | 'gradient-outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  glow?: boolean;
}

const variants = {
  primary: [
    'bg-gradient-to-r from-blue-600 via-blue-500 to-green-500',
    'text-white font-semibold',
    'shadow-button hover:shadow-button-hover',
    'hover:scale-105 active:scale-95',
    'relative overflow-hidden',
    // Shimmer effect overlay
    'before:absolute before:inset-0',
    'before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent',
    'before:translate-x-[-200%] hover:before:translate-x-[200%]',
    'before:transition-transform before:duration-700',
  ].join(' '),
  secondary: [
    'bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm',
    'text-blue-700 dark:text-blue-400 font-medium',
    'border-2 border-blue-300 dark:border-blue-600 hover:border-blue-500 dark:hover:border-blue-400',
    'hover:bg-blue-50/80 dark:hover:bg-slate-700/80',
    'hover:scale-105 active:scale-95',
  ].join(' '),
  ghost: [
    'bg-transparent',
    'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400',
    'hover:bg-blue-50 dark:hover:bg-slate-800',
    'hover:scale-105 active:scale-95',
  ].join(' '),
  neon: [
    'bg-transparent',
    'text-blue-500 dark:text-blue-400 font-semibold',
    'border-2 border-blue-500 dark:border-blue-400',
    'hover:shadow-glow-md hover:text-white hover:bg-blue-500',
    'hover:scale-105 active:scale-95',
  ].join(' '),
  'gradient-outline': [
    'relative bg-white/90 dark:bg-slate-900/90',
    'text-blue-600 dark:text-blue-400 font-semibold',
    'hover:scale-105 active:scale-95',
    // Gradient border effect using pseudo-element
    'before:absolute before:inset-0 before:-z-10',
    'before:p-[2px] before:rounded-full',
    'before:bg-gradient-to-r before:from-blue-600 before:via-blue-500 before:to-green-500',
    'before:-m-[2px]',
  ].join(' '),
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-9 py-4.5 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  glow = false,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center whitespace-nowrap',
    'transition-all duration-300 ease-out rounded-full',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    glow && 'shadow-glow-md animate-glow-pulse',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 transition-transform group-hover:-translate-x-1">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'group')}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(classes, 'group')}>
      {content}
    </button>
  );
}
