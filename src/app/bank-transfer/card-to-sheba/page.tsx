import AppContainer from '@/components/AppContainer';
import DescriptionBox from '@/components/bank-transfer/card-to-sheba/DescriptionBox';
import TransferBox from '@/components/bank-transfer/card-to-sheba/TransferBox';
import { cn } from '@/lib/utils';

interface CardToShebaPageProps {
  className?: string;
}

export default function CardToShebaPage({ className }: CardToShebaPageProps) {
  return (
    <AppContainer
      className={cn(
        'flex w-full items-start justify-center gap-[4rem]',
        className,
      )}
    >
      <TransferBox />
      <DescriptionBox />
    </AppContainer>
  );
}
