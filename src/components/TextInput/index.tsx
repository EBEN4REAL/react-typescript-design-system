import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function TextInput({ label, error, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        {...rest}
        className={clsx(
          'border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50',
          error && 'border-red-500',
          className,
        )}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
