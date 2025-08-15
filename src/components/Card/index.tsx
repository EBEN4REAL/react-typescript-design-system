import React from 'react';
import clsx from 'clsx';

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
};

export function Card({ title, children, className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={clsx(
        'bg-white shadow rounded-lg p-6 space-y-4',
        className
      )}
    >
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}