import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

const variantClasses = {
  primary:
    'bg-[var(--auron-accent)] text-white shadow-sm hover:shadow-md hover:brightness-110',
  secondary:
    'bg-[var(--auron-bg-secondary)] text-[var(--auron-text)] border border-[var(--auron-border)] hover:border-[var(--auron-accent)] hover:text-[var(--auron-accent-text)]',
  outline:
    'bg-transparent text-[var(--auron-text)] border border-[var(--auron-border)] hover:border-[var(--auron-text)]',
  ghost:
    'bg-transparent text-[var(--auron-text-secondary)] hover:text-[var(--auron-text)] hover:bg-[var(--auron-bg-secondary)]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, as = 'button', href, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--auron-accent)] focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
      sizeClasses[size],
      variantClasses[variant],
      className,
    )

    if (as === 'a' && href) {
      return (
        <motion.a href={href} className={classes} whileHover={{ y: -1 }} whileTap={{ y: 0 }}>
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button ref={ref} className={classes} whileHover={{ y: -1 }} whileTap={{ y: 0 }} {...(props as any)}>
        {children}
      </motion.button>
    )
  },
)
Button.displayName = 'Button'
