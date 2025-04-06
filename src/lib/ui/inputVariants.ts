import { cva } from 'class-variance-authority';

export const inputWrapperVariants = cva('relative flex w-full', {
  variants: {
    fullWidth: {
      true: 'w-full',
      false: 'w-auto',
    },
    error: {
      true: 'text-error-main',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    fullWidth: false,
    error: false,
    disabled: false,
  },
});

export const inputVariants = cva(
  'w-full h-12 px-4 rounded-xl bg-white border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0',
  {
    variants: {
      error: {
        true: 'border-error-main focus:border-error-main focus:ring-error-main/20',
        false:
          'border-gray-300 focus:border-primary-main focus:ring-primary-main/20',
      },
      withStartAdornment: {
        true: 'pl-10',
        false: '',
      },
      withEndAdornment: {
        true: 'pr-10',
        false: '',
      },
      disabled: {
        true: 'bg-gray-100',
        false: '',
      },
      numeric: {
        true: 'dir-ltr text-end',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
      withStartAdornment: false,
      withEndAdornment: false,
      disabled: false,
      numeric: false,
    },
  },
);
