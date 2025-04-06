import { cva } from 'class-variance-authority';

export const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      true: 'flex-wrap',
      false: '',
    },
    gap: {
      none: '',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'center',
    justify: 'center',
    wrap: false,
    gap: 'none',
  },
});
