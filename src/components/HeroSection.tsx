import { cn } from '@/lib/utils/index';
import AppHeader from './AppHeader';
import AppContainer from './AppContainer';
import Flex from './ui/Flex';
import { CheckCircle } from 'solar-icon-set';
import { headerFeatures } from '@/constants';

const HeroSection = () => {
  return (
    <section
      className={cn(
        'from-primary-main to-hero-section-main relative h-[677] bg-radial',
      )}
    >
      <AppContainer className={cn('relative flex h-full flex-col')}>
        <AppHeader />
        <Flex
          justify={'center'}
          direction={'col'}
          align={'center'}
          className={'h-full text-white'}
        >
          <p className="mb-8 text-4xl font-bold">
            نوین؛ سامانه استعلام{' '}
            <span className="text-secondary-main">آنلاین</span> و{' '}
            <span className="text-secondary-main">سریع</span>
          </p>
          <Flex justify={'between'} align={'center'} gap={'xl'}>
            {headerFeatures.map((feature, index) => (
              <Flex key={index} gap={'sm'}>
                <CheckCircle
                  iconStyle="Bold"
                  className="text-secondary-main!"
                />
                <p>{feature}</p>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </AppContainer>
    </section>
  );
};

export default HeroSection;
