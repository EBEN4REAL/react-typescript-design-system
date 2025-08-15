import clsx from 'clsx';
import React from 'react';

type DividerProps = React.HTMLAttributes<HTMLHRElement>;

export function Divider({ className, ...rest }: DividerProps) {
  return <hr {...rest} className={clsx('border-t my-4', className)} />;
}