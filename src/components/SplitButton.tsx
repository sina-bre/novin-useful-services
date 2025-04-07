'use client';
import { cn } from '@/lib/utils/index';
import Link from 'next/link';

const SplitButton = () => {
  return (
    <div
      className={cn(
        'h-max w-max overflow-hidden rounded-xl border border-white text-white',
      )}
    >
      <Link href="/login">
        <button
          className={cn(
            'cursor-pointer border-l border-l-white p-1 px-4 hover:bg-gray-500',
          )}
        >
          ورود
        </button>
      </Link>
      <Link href="/signup">
        <button className={cn('cursor-pointer p-1 px-4 hover:bg-gray-500')}>
          ثبت نام
        </button>
      </Link>
    </div>
  );
};

export default SplitButton;
