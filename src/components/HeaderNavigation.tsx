import React from 'react';
import Link from 'next/link';
import { headerMenuItems } from '@/constants';

const HeaderNavigation = () => {
  return (
    <nav className="">
      <ul className="flex gap-12">
        {headerMenuItems.map((item, index) => (
          <li key={index} className="hover:text-secondary-main text-white">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
