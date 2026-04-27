import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import { Button } from '@heroui/react';
import NavLink from './Navlink';
const Navbar = () => {
  return (
    <div className='flex justify-between w-11/12 mx-auto mt-16'>
   <div></div>
   <ul className='flex gap-4 '>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/about'}>About us</NavLink></li>
    <li><NavLink href={'/career'}>Career</NavLink></li>
   </ul>

   <div className='flex gap-4 items-center'>
    <Image
    src={userAvatar}
    width={30}
    height={20}
    alt='user avater'
    /> 
    <Button><Link href={'/login'}>Login</Link></Button>
    
   </div>
    </div>
  );
};

export default Navbar;