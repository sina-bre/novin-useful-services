// /components/CreditCard.tsx
'use client';
import TextField from '@/components/ui/TextField';
import { cn } from '@/lib/utils';
import { TCreditCard } from '@/types';
import { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { Control, Controller, FieldErrors, useWatch } from 'react-hook-form';
import { Flex } from '@/components/ui';
import { Card2 } from 'solar-icon-set';
import DynamicBankInfo from './DynamicBankInfo';

interface CreditCardProps {
  className?: string;
  control: Control<TCreditCard>;
  formError?: FieldErrors<TCreditCard>;
}

const fieldNamesCredit: (keyof TCreditCard)[] = [
  'input1',
  'input2',
  'input3',
  'input4',
];

export default function CreditCard({
  control,
  formError,
  className,
}: CreditCardProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length === 4 && index < fieldNamesCredit.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === 'Backspace' && !value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const input1 = useWatch({ control, name: 'input1' }) || '';
  const input2 = useWatch({ control, name: 'input2' }) || '';

  const cardBin = `${input1}${input2.slice(0, 2)}`;

  return (
    <Flex
      direction={'col'}
      justify={'between'}
      className={cn(
        'shadow-main h-[212px] w-full max-w-[451px] rounded-lg bg-white pt-6',
        className,
      )}
    >
      <header
        className={cn(
          'flex h-10 w-full items-center justify-between overflow-hidden bg-gray-200 px-8',
        )}
      >
        {/* Use the dynamic bank info which updates based on the card BIN */}
        <DynamicBankInfo cardBin={cardBin} />
        <Card2 iconStyle="BoldDuotone" size={30} className="text-gray-500!" />
      </header>
      <Flex
        justify={'between'}
        align={'center'}
        className={cn('mb-4 flex-row-reverse gap-4 px-8')}
      >
        {fieldNamesCredit.map((name, index) => (
          <Controller
            key={name}
            name={name}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleChange(e as ChangeEvent<HTMLInputElement>, index);
                }}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                onKeyDown={(e) => handleBackspace(e, index)}
                maxLength={4}
                inputClassName={cn(
                  'dir-rtl text-center text-xl p-0',
                  formError?.[name] && 'bg-error-light',
                )}
                numeric
                error={!!formError?.[name]}
              />
            )}
          />
        ))}
      </Flex>
    </Flex>
  );
}
