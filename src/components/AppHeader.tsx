'use client';
import { cn } from '@/lib/utils/index';
import SplitButton from './SplitButton';
import { HamburgerMenu } from 'solar-icon-set';
import { memo } from 'react';
import HeaderNavigation from './HeaderNavigation';

const AppHeader = () => {
  return (
    <header
      className={cn('flex items-center justify-between overflow-hidden py-10')}
    >
      <button className={cn('cursor-pointer')}>
        <HamburgerMenu className="text-white!" size={40} iconStyle="Outline" />
      </button>
      <HeaderNavigation />
      <SplitButton />
    </header>
  );
};

export default memo(AppHeader);
