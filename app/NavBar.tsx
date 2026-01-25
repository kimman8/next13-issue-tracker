'use client';

import Link from 'next/link';
import React from 'react';
import { FaBug } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
  const links = [
    {
      href: '/',
      label: 'Dashboard',
    },
    {
      href: '/issues',
      label: 'Issues',
    },
  ];
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav className="flex border-b mb-5 px-3 h-14 items-center">
      <Link className="mr-3" href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={classnames({
              'text-zinc-900': currentPath === link.href,
              'text-zinc-400': currentPath !== link.href,
              'hover:text-zinc-800 transition-colors': true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
