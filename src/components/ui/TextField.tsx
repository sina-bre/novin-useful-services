'use client';

import React, { forwardRef, useState } from 'react';
import { Eye, EyeClosed } from 'solar-icon-set';
import { cn } from '@/lib/utils';
import { TextFieldProps, INPUT_TYPES } from '@/types';
import { inputVariants, inputWrapperVariants } from '@/lib/ui';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      required,
      disabled,
      numeric,
      type = INPUT_TYPES.TEXT,
      placeholder,
      startAdornment,
      endAdornment,
      fullWidth,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === INPUT_TYPES.PASSWORD;
    const inputType = isPassword && showPassword ? INPUT_TYPES.TEXT : type;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (numeric && !/^[+\d]*$/.test(e.target.value)) return;

      onChange?.(e);
    };

    const renderPasswordToggle = () => {
      if (!isPassword) return null;

      return (
        <button
          type="button"
          className="absolute top-1/2 right-3 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword((prev) => !prev)}
          tabIndex={-1}
        >
          {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
        </button>
      );
    };

    return (
      <div className={cn('flex flex-col gap-1', className)}>
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-error-main ml-1">*</span>}
          </label>
        )}

        <div
          className={cn(
            inputWrapperVariants({ fullWidth, error: !!error, disabled }),
          )}
        >
          {startAdornment && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
              {startAdornment}
            </div>
          )}

          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={handleChange}
            className={cn(
              inputVariants({
                error: !!error,
                withStartAdornment: !!startAdornment,
                withEndAdornment: !!endAdornment || isPassword,
                disabled,
                numeric,
              }),
            )}
            {...props}
          />

          {renderPasswordToggle()}

          {endAdornment && !isPassword && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500">
              {endAdornment}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p
            className={cn(
              'text-xs',
              error ? 'text-error-main' : 'text-gray-500',
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
