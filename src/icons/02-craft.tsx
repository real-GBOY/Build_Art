import type { ImgHTMLAttributes } from 'react';
import craftIcon from './02-craft.svg';

export function Icon02Craft({
  className,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={craftIcon}
      alt=""
      aria-hidden
      className={className}
      {...props}
    />
  );
}
