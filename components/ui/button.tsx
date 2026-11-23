'use client';

import React from 'react';
import {cn} from '@/lib/utils';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'subtle'
  | 'ghost'
  | 'accent';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#315BE8] text-white hover:bg-[#2548C9] active:bg-[#1E3CAD] shadow-xs border border-transparent focus-visible:ring-[#315BE8]',
  secondary:
    'bg-[#16A6A0] text-white hover:bg-[#118883] active:bg-[#0E706C] shadow-xs border border-transparent focus-visible:ring-[#16A6A0]',
  outline:
    'bg-white text-[#17243B] border border-[#E6EBF2] hover:border-[#315BE8]/50 hover:bg-[#F6F9FF] active:bg-[#EEF3FF] focus-visible:ring-[#315BE8]',
  subtle:
    'bg-[#F6F9FF] text-[#315BE8] border border-[#E6EBF2] hover:bg-[#EEF3FF] hover:border-[#315BE8]/40 active:bg-[#E2ECFF] focus-visible:ring-[#315BE8]',
  ghost:
    'bg-transparent text-[#17243B] hover:bg-[#F6F9FF] hover:text-[#315BE8] active:bg-[#EEF3FF] border border-transparent focus-visible:ring-[#315BE8]',
  accent:
    'bg-[#F3A644] text-[#17243B] font-semibold hover:bg-[#E59632] active:bg-[#D48624] shadow-xs border border-transparent focus-visible:ring-[#F3A644]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-[38px] px-3.5 py-1.5 text-xs gap-1.5 rounded-lg',
  md: 'min-h-[44px] px-5 py-2.5 text-sm gap-2 rounded-lg',
  lg: 'min-h-[48px] px-5 sm:px-6 py-3 text-sm sm:text-base gap-2.5 rounded-xl',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      fullWidth = false,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-semibold text-center leading-snug select-none cursor-pointer max-w-full',
          'whitespace-normal sm:whitespace-nowrap',
          'transition-all duration-150 ease-out active:scale-[0.98]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
          'disabled:opacity-50 disabled:pointer-events-none',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {leftIcon && <span className="shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
