import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 touch-manipulation',
          {
            'bg-blue-600 text-white shadow hover:bg-blue-700 active:bg-blue-800': variant === 'default',
            'hover:bg-slate-100 active:bg-slate-200': variant === 'ghost',
            'border border-slate-300 bg-transparent hover:bg-slate-50 active:bg-slate-100': variant === 'outline',
            'min-h-[36px] px-3 py-1.5 text-sm': size === 'sm',
            'min-h-[44px] px-4 py-2.5': size === 'default',
            'min-h-[48px] px-6 md:px-8 py-3 text-base': size === 'lg',
            'h-9 w-9 min-h-[44px] min-w-[44px]': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';



