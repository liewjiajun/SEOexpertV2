import { cn } from '@/lib/utils';

interface FloatingBlobProps {
  color?: 'blue' | 'green' | 'violet' | 'fuchsia' | 'coral';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animationDelay?: string;
}

const colors = {
  blue: 'bg-blue-400',
  green: 'bg-green-400',
  // Legacy support
  violet: 'bg-blue-400',
  fuchsia: 'bg-green-400',
  coral: 'bg-green-400',
};

const sizes = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
};

export function FloatingBlob({
  color = 'blue',
  size = 'md',
  className,
  animationDelay = '0s',
}: FloatingBlobProps) {
  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl opacity-30',
        'animate-blob pointer-events-none',
        colors[color],
        sizes[size],
        className
      )}
      style={{ animationDelay }}
    />
  );
}

interface FloatingDotsProps {
  className?: string;
}

export function FloatingDots({ className }: FloatingDotsProps) {
  return (
    <div className={cn('absolute pointer-events-none', className)}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={cn(
            'absolute w-2 h-2 rounded-full bg-blue-400/40',
            'animate-float'
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

interface GradientOrbProps {
  className?: string;
}

export function GradientOrb({ className }: GradientOrbProps) {
  return (
    <div
      className={cn(
        'absolute w-[600px] h-[600px] rounded-full',
        'bg-gradient-radial from-blue-500/20 via-green-500/10 to-transparent',
        'blur-3xl pointer-events-none animate-pulse-subtle',
        className
      )}
    />
  );
}
