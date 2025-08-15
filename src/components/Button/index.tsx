import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base = 'rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300',
};
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={twMerge(
        base,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    />
  );
}
