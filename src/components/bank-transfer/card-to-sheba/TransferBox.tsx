'use client';

import { cn } from '@/lib/utils';
import CreditCard from './CreditCard';
import PriceBox from './PriceBox';
import { Button } from '@/components/ui';
import { TCreditCard } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { creditCardSchema } from '@/validations';
import { useForm } from 'react-hook-form';

export default function TransferBox() {
  const {
    control,
    handleSubmit,
    formState: { errors: formError },
  } = useForm<TCreditCard>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: { input1: '', input2: '', input3: '', input4: '' },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main
      className={cn(
        'bg-red border-success-light shadow-main flex h-[676px] w-full max-w-[543px] flex-col justify-start rounded-lg border-t-2 border-r-2 border-l-2 p-8',
      )}
    >
      <div className={cn('w-full text-center text-xl font-bold')}>
        تبدیل شماره کارت به شبا
      </div>
      <div
        className={cn(
          'text-custom-gray-300 mt-10 w-full text-center text-lg font-light',
        )}
      >
        برای استعلام، شماره کارت بانکی خود را وارد کنید
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreditCard
          formError={formError}
          control={control}
          className={cn('mt-5')}
        />
        <div className="h-[1rem]">
          {Object.keys(formError).length > 0 && (
            <p className="text-error-main mt-4 w-full text-xs">
              شماره کارت وارد شده اشتباه است{' '}
            </p>
          )}
        </div>

        <PriceBox className={cn('mt-[4rem]')} />
        <div
          className={cn(
            'mt-[4rem] flex w-full items-center justify-center gap-4',
          )}
        >
          <Button className={cn('bg-success-main m-0 w-[120px]')}>تایید</Button>
          <Button className={cn('bg-error-main m-0 w-[120px]')}>بازگشت</Button>
        </div>
      </form>
    </main>
  );
}
