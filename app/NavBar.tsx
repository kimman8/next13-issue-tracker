import Link from 'next/link';
import React from 'react';
import { FaBug } from 'react-icons/fa';

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
  return (
    <nav className="flex border-b mb-5 px-3 h-14 items-center bg-">
      <Link className="mr-3" href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
