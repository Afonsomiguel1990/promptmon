'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CyberpunkButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  ripple?: boolean;
}

const variants = {
  primary: {
    spinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,#00f3ff_0%,#bf00ff_50%,#00f3ff_100%)]',
    inner: 'bg-slate-950 group-hover:text-neon-blue',
    glow: 'hover:shadow-[0_0_30px_rgba(0,243,255,0.5)]'
  },
  secondary: {
    spinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#8b5cf6_50%,#6366f1_100%)]',
    inner: 'bg-slate-950 group-hover:text-purple-400',
    glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]'
  },
  danger: {
    spinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,#ef4444_0%,#dc2626_50%,#ef4444_100%)]',
    inner: 'bg-slate-950 group-hover:text-red-400',
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]'
  },
  success: {
    spinner: 'bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#059669_50%,#10b981_100%)]',
    inner: 'bg-slate-950 group-hover:text-emerald-400',
    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]'
  }
};

const sizes = {
  sm: {
    container: 'h-8 text-sm',
    inner: 'px-4 py-1'
  },
  md: {
    container: 'h-10 text-sm',
    inner: 'px-6 py-1'
  },
  lg: {
    container: 'h-12 text-lg',
    inner: 'px-8 py-2'
  }
};

export default function CyberpunkButton({
  children,
  variant = 'primary',
  size = 'md',
  glow = true,
  ripple = true,
  className,
  ...props
}: CyberpunkButtonProps) {
  const variantStyles = variants[variant];
  const sizeStyles = sizes[size];

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05,
        ...(glow && { filter: 'brightness(1.1)' })
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300",
        sizeStyles.container,
        glow && variantStyles.glow,
        className
      )}
      {...props}
    >
      {/* Spinning border */}
      <span className={cn(
        "absolute inset-[-1000%] animate-[spin_2s_linear_infinite]",
        variantStyles.spinner
      )} />
      
      {/* Button content */}
      <span className={cn(
        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-white backdrop-blur-3xl font-medium transition-colors duration-300",
        variantStyles.inner,
        sizeStyles.inner
      )}>
        {children}
      </span>
      
      {/* Ripple effect */}
      {ripple && (
        <motion.span
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-full bg-white/20 pointer-events-none"
        />
      )}
    </motion.button>
  );
}

export { CyberpunkButton };