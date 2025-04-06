import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-primary-main text-white hover:bg-primary-main/90',
        secondary: 'bg-secondary-main text-white hover:bg-secondary-main/90',
        outline:
          'border-2 border-primary-main text-primary-main hover:bg-primary-main/10',
        ghost: 'text-primary-main hover:bg-primary-main/10',
        danger: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
      disabled: {
        true: 'opacity-50 pointer-events-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);
