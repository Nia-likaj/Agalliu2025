import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
