'use client';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useDebounce } from '@uidotdev/usehooks';
import banksData from '@/data/banks.json';
import { Buildings2 } from 'solar-icon-set';

interface DynamicBankInfoProps {
  cardBin: string;
}

export default function DynamicBankInfo({ cardBin }: DynamicBankInfoProps) {
  const debouncedBin = useDebounce(cardBin, 300);

  const bank = banksData.find((bankEntry) =>
    bankEntry.bins.some((bin: string) => debouncedBin.startsWith(bin)),
  );

  if (!bank) {
    return (
      <div className={cn('flex items-center justify-center gap-2')}>
        <Buildings2
          iconStyle="BoldDuotone"
          size={30}
          className="text-primary-main!"
        />
        <h3 className={cn('text-primary-main')}>نام بانک شما</h3>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center justify-center gap-2')}>
      <Image src={bank.logo} width={30} height={30} alt={bank.bankName} />
      <h3 className={cn('text-primary-main')}>{bank.bankName}</h3>
    </div>
  );
}
