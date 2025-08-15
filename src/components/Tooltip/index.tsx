import React from 'react';
import clsx from 'clsx';

type TooltipProps = {
  text: string;
  children: React.ReactNode;
};

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={clsx(
          'pointer-events-none absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2',
          'opacity-0 group-hover:opacity-100 transition-opacity',
          'bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap',
          'z-10'
        )}
      >
        {text}
      </div>
    </div>
  );
}