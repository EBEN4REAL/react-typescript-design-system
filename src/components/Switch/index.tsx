import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

/**
 * A simple toggle switch. Controlled via checked + onChange.
 */
export default function Switch({ label, className, ...rest }: Props) {
  return (
    <label className={clsx("inline-flex items-center gap-2", className)}>
      <span>{label}</span>
      <div className="relative">
        <input type="checkbox" {...rest} className="sr-only peer" />
        <div className="w-10 h-6 bg-gray-300 rounded-full peer-checked:bg-primary transition-colors" />
        <div
          className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md 
                        peer-checked:translate-x-4 transition-transform"
        />
      </div>
    </label>
  );
}
