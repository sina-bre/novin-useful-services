import { VariantProps } from 'class-variance-authority';
import { FC, ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';
import { flexVariants } from '@/lib/ui';

interface FlexProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof flexVariants> {
  as?: ElementType;
  children: ReactNode;
}

const Flex: FC<FlexProps> = ({
  as: Component = 'div',
  children,
  className,
  ...props
}) => {
  return (
    <Component className={cn(flexVariants(props), className)}>
      {children}
    </Component>
  );
};

export default Flex;
