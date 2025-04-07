import { cn } from '@/lib/utils';

interface PriceBoxProps {
  className?: string;
}

export default function PriceBox({ className }: PriceBoxProps) {
  return (
    <main
      className={cn(
        'bg-primary-main shadow-main flex h-[89px] w-full max-w-[451px] flex-col justify-between rounded-lg p-4',
        className,
      )}
    >
      <section className={cn('flex justify-between')}>
        <div className={cn('text-base text-white')}>هزینه استعلام</div>
        <div className={cn('space-x-2 text-base text-white')}>
          <span>10,780</span>
          <span>تومان</span>
        </div>
      </section>
      <section className="">
        <div className={cn('text-custom-gray-400 text-sm font-extralight')}>
          هزینه استعلام به حساب پلیس +10 واریز میشود.
        </div>
      </section>
    </main>
  );
}
