import BankTransferNavigation from '@/components/bank-transfer/BankTransferNavigation';
import HeroSection from '@/components/HeroSection';
import { cn } from '@/lib/utils';
import { ReactNode, Suspense } from 'react';

export default function BankServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="bg-surface">
      <div className={cn('h-full')}>
        <HeroSection />

        <div className="relative z-10 mx-auto mt-[-36px] w-full max-w-[1106px]">
          <Suspense fallback={<NavSkeleton />}>
            <BankTransferNavigation />
          </Suspense>
        </div>
      </div>

      <section className="mt-[6rem] flex w-full justify-center">
        <Suspense fallback={<ContentSkeleton />}>{children}</Suspense>
      </section>
    </main>
  );
}

export function NavSkeleton() {
  return <div className="h-16 w-full animate-pulse rounded-xl bg-gray-100" />;
}

export function ContentSkeleton() {
  return (
    <div className="h-[400px] w-full animate-pulse rounded-xl bg-gray-100" />
  );
}
