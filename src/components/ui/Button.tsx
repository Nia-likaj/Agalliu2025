import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg',
      secondary: 'bg-gray-800 text-white hover:bg-gray-900 shadow-md',
      outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
      ghost: 'text-gray-700 hover:bg-gray-100',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
