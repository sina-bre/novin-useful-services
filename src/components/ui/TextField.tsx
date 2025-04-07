'use client';

import { cn } from '@/lib/utils';
import { HTMLProps, forwardRef, ChangeEvent, useState } from 'react';
import { Eye, EyeClosed } from 'solar-icon-set';
import Flex from './Flex';

type TextFieldProps = {
  placeholder?: string;
  error?: string | boolean;
  className?: string;
  label?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  numeric?: boolean;
  autoComplete?: string;
  dataTestId?: string;
  dataCustom?: Record<string, string>;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  iconStart?: JSX.Element;
  iconEnd?: JSX.Element;
  type?: 'text' | 'password';
  inputClassName?: string;
} & HTMLProps<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      placeholder,
      error,
      className,
      label,
      name,
      required,
      disabled,
      numeric,
      autoComplete,
      value = '',
      onChange,
      iconStart,
      iconEnd,
      type = 'text',
      inputClassName,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (numeric) {
        const regex = /^[+\d]*$/;
        if (!regex.test(inputValue)) return;
      }
      if (onChange) onChange(e);
    };

    return (
      <div className={cn('flex w-full flex-col', className)}>
        {label && (
          <label
            htmlFor={name}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            {label} {required && <span className="text-error-main">*</span>}
          </label>
        )}
        <div className="relative w-full">
          {iconStart && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              {iconStart}
            </div>
          )}
          <input
            {...props}
            ref={ref}
            id={name}
            name={name}
            type={inputType}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            autoComplete={autoComplete}
            value={value}
            onChange={handleChange}
            className={cn(
              'h-12 w-full shrink-0 grow rounded-xl bg-white px-4 text-gray-900',
              'border! border-gray-300! focus:border-gray-400!',
              disabled ? 'cursor-not-allowed bg-gray-100' : '',
              error ? 'border-error-main! focus:border-error-main!' : '',
              iconStart ? 'ps-10' : '',
              iconEnd || type === 'password' ? 'pe-10' : '',
              inputClassName,
            )}
          />
          {type === 'password' && (
            <Flex
              justify={'center'}
              align={'center'}
              className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
            </Flex>
          )}
          {iconEnd && type !== 'password' && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              {iconEnd}
            </div>
          )}
        </div>
        {typeof error === 'string' && (
          <p className="text-error-main mt-2 text-xs">{error}</p>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
