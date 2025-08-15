import { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
};

export default function TextArea({ label, error, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        {...rest}
        className={clsx(
          'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50',
          error && 'border-red-500',
          className
        )}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
