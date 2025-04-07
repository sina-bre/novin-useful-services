import AppContainer from '@/components/AppContainer';
import HeroSection from '@/components/HeroSection';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AppContainer className={cn('bg-gray-50')}>
        {/* <p>محتوای سایت</p> */}
      </AppContainer>
    </>
  );
}
