import React from 'react';

import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';
import { buttonVariants } from '@/lib/ui';

const LoadingSpinner = () => (
  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fullWidth, disabled: isDisabled }),
          className,
        )}
        disabled={isDisabled}
        {...props}
      >
        <span className="inline-flex items-center gap-2">
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span>Loading...</span>
            </>
          ) : (
            <>
              {startIcon && <span className="inline-flex">{startIcon}</span>}
              {children}
              {endIcon && <span className="inline-flex">{endIcon}</span>}
            </>
          )}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
