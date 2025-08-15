import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Checkbox({ label, ...rest }: Props) {
  return (
    <label className="inline-flex items-center gap-2">
      <input
        type="checkbox"
        {...rest}
        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary/50"
      />
      <span>{label}</span>
    </label>
  );
}
