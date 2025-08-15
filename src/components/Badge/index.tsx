import React from 'react';
import clsx from 'clsx';

type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error';
type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantStyles: Record<Variant, string> = {
  default: 'bg-gray-200 text-gray-800',
  primary: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
};

export function Badge({ variant = 'default', className, children, ...rest }: BadgeProps) {
  return (
    <span
      {...rest}
      className={clsx(
        'inline-block px-2 py-1 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}