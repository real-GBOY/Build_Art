import type { LucideProps } from 'lucide-react';
import { Rocket } from 'lucide-react';

export function Icon01Rocket({ className, ...props }: LucideProps) {
  return (
    <Rocket
      size={28}
      strokeWidth={2}
      className={className}
      aria-hidden
      {...props}
    />
  );
}
