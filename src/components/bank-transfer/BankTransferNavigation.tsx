'use client';

import { bankTransferNavItems } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BankTransferNavigation() {
  const pathname = usePathname();

  return (
    <nav className={cn('overflow-hidden rounded-xl bg-white p-4 shadow')}>
      <ul className={cn('flex items-center justify-around')}>
        {bankTransferNavItems.map((link) => (
          <li
            key={link.href}
            className={cn(
              'hover:text-secondary-main cursor-pointer rounded-lg px-8 py-2 text-black',
              pathname === link.href &&
                'bg-primary-main font-semibold text-white',
            )}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
