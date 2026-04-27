"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return <Link href={href} className={`bg-gray-100 rounded-xl py-2 px-4 ${isActive ? 'shadow-md border border-gray-200' : ''}`}>{children}</Link>;
};

export default NavLink;