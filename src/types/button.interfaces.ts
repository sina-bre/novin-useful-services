import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/lib/ui';

export type ButtonBaseProps = ComponentProps<'button'>;

export interface ButtonProps
  extends ButtonBaseProps,
    Omit<VariantProps<typeof buttonVariants>, 'disabled'> {
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}
