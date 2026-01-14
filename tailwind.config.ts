import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Blue (Primary) - Trust, Technology, Professionalism
        blue: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Brand Green (Secondary) - Growth, Success, Results
        green: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
          dark: '#16A34A',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#052E16',
        },
        // Slate (Neutrals for light/dark mode)
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        // Legacy violet/fuchsia mapping to blue/green for compatibility
        violet: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        fuchsia: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
          dark: '#16A34A',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        coral: {
          DEFAULT: '#4ADE80',
          light: '#86EFAC',
          dark: '#22C55E',
        },
        pink: {
          DEFAULT: '#22C55E',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },
        // Ink palette (dark backgrounds)
        ink: {
          DEFAULT: '#0F172A',
          secondary: '#64748B',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        muted: '#94A3B8',
        background: '#FFFFFF',
        surface: '#FFFFFF',
        border: '#E2E8F0',
        // Accent for compatibility
        accent: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          light: '#DBEAFE',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25' }],
      },
      maxWidth: {
        content: '1120px',
        prose: '720px',
      },
      borderRadius: {
        card: '18px',
        button: '9999px',
      },
      backdropBlur: {
        glass: '16px',
      },
      boxShadow: {
        // Light mode shadows
        card: '0 4px 20px rgba(59, 130, 246, 0.1)',
        'card-hover': '0 8px 40px rgba(59, 130, 246, 0.2)',
        button: '0 4px 15px rgba(59, 130, 246, 0.4)',
        'button-hover': '0 8px 25px rgba(34, 197, 94, 0.5)',
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-md': '0 0 25px rgba(59, 130, 246, 0.5), 0 0 50px rgba(34, 197, 94, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(34, 197, 94, 0.4)',
        glass: '0 8px 32px rgba(59, 130, 246, 0.15)',
        // Glow effects
        'glow-blue': '0 0 60px rgba(59, 130, 246, 0.5)',
        'glow-green': '0 0 60px rgba(34, 197, 94, 0.5)',
        'glow-blue-sm': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-blue-md': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-blue-lg': '0 0 60px rgba(59, 130, 246, 0.5)',
        'glow-green-sm': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-green-md': '0 0 40px rgba(34, 197, 94, 0.4)',
        'glow-green-lg': '0 0 60px rgba(34, 197, 94, 0.5)',
        'glass-premium': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        // Focus rings
        'focus-blue': '0 0 0 3px rgba(59, 130, 246, 0.3)',
        'focus-green': '0 0 0 3px rgba(34, 197, 94, 0.3)',
        // Legacy mappings
        'glow-violet': '0 0 60px rgba(59, 130, 246, 0.5)',
        'glow-pink': '0 0 60px rgba(34, 197, 94, 0.5)',
        'glow-lime': '0 0 60px rgba(34, 197, 94, 0.4)',
        'neon-pink': '0 0 20px rgba(34, 197, 94, 0.6)',
        'neon-purple': '0 0 20px rgba(59, 130, 246, 0.6)',
      },
      backgroundImage: {
        // Brand gradients
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
        'gradient-green': 'linear-gradient(135deg, #22C55E 0%, #15803D 100%)',
        'gradient-brand': 'linear-gradient(135deg, #3B82F6 0%, #22C55E 100%)',
        'gradient-blue-subtle': 'linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%)',
        // Legacy mappings
        'gradient-purple-pink': 'linear-gradient(135deg, #2563EB 0%, #16A34A 100%)',
        'gradient-violet-fuchsia': 'linear-gradient(90deg, #3B82F6 0%, #22C55E 100%)',
        'gradient-radial': 'radial-gradient(circle at 50% 50%, #3B82F6 0%, transparent 70%)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -30px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(30px, 10px) scale(1.05)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(34, 197, 94, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(34, 197, 94, 0.5)' },
        },
        'bounce-hover': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-5deg)' },
          '75%': { transform: 'rotate(5deg)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'mesh-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 0%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 100%' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        blob: 'blob 10s ease-in-out infinite',
        'blob-slow': 'blob 15s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        shimmer: 'shimmer 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'bounce-hover': 'bounce-hover 0.5s ease-in-out',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        wiggle: 'wiggle 0.5s ease-in-out',
        'spin-slow': 'spin-slow 20s linear infinite',
        'mesh-shift': 'mesh-shift 10s ease infinite',
        'scale-in': 'scale-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
