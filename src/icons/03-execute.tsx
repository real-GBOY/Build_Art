import type { ImgHTMLAttributes } from 'react';
import executeIcon from './03-execute.svg';

export function Icon03Execute({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={executeIcon}
      alt=""
      aria-hidden
      className={className}
      {...props}
    />
  );
}
