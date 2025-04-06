import { ElementType, HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { flexVariants } from '@/lib/ui';

export const FLEX_DIRECTIONS = {
  ROW: 'row',
  COL: 'col',
} as const;

export const FLEX_ALIGNMENTS = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  BASELINE: 'baseline',
  STRETCH: 'stretch',
} as const;

export const FLEX_JUSTIFIES = {
  START: 'start',
  CENTER: 'center',
  END: 'end',
  BETWEEN: 'between',
  AROUND: 'around',
  EVENLY: 'evenly',
} as const;

export const FLEX_GAPS = {
  NONE: 'none',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
} as const;

export type FlexBaseProps = HTMLAttributes<HTMLElement>;

export interface FlexOwnProps {
  as?: ElementType;
}

export interface FlexProps
  extends FlexBaseProps,
    FlexOwnProps,
    Omit<VariantProps<typeof flexVariants>, 'disabled'> {}
