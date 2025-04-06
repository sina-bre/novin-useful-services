import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { inputVariants } from '@/lib/ui';

export const INPUT_TYPES = {
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  NUMBER: 'number',
  TEL: 'tel',
} as const;

export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export type TextFieldBaseProps = Omit<ComponentProps<'input'>, 'type'>;

export interface TextFieldProps
  extends TextFieldBaseProps,
    Omit<VariantProps<typeof inputVariants>, 'disabled'> {
  type?: InputType;
  label?: string;
  errorMessage?: string;
  error?: boolean;
  helperText?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  fullWidth?: boolean;
  numeric?: boolean;
}

export type TextFieldRef = HTMLInputElement;
