import { SelectHTMLAttributes } from 'react';
import clsx from 'clsx';

type Option = { label: string; value: string };
type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[];
  error?: string;
};

export default function Select({ label, options, error, className, ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <select
        {...rest}
        className={clsx(
          'px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50',
          error && 'border-red-500',
          className
        )}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
