'use client'
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import Image from 'next/image';
import { Button, Spinner } from '@heroui/react';
import NavLink from './Navlink';
import { authClient } from '@/lib/auth-client';
const Navbar =  () =>  {
  const { data: session, isPending } =  authClient.useSession();
  const user = session?.user;
  console.log(user, 'user')
  return (
    <div className='flex justify-between w-11/12 mx-auto mt-16'>
   <div></div>
   <ul className='flex gap-4 '>
    <li><NavLink href={'/'}>Home</NavLink></li>
    <li><NavLink href={'/about'}>About us</NavLink></li>
    <li><NavLink href={'/career'}>Career</NavLink></li>
   </ul>

{isPending ? 
  (<div className="flex items-center gap-4">
      <Spinner />
    </div>)
: user ? (<div className='flex gap-4 items-center'>
   <Image
  src={user?.image || userAvatar}
  width={300}
  height={300}
  alt="user avatar"
  className="w-10 h-10 rounded-full object-cover"
/>
    <p>Welcome {user?.name}!</p>
    
    <Button onClick={async() => await authClient.signOut()}><Link href={'/login'}>logout</Link></Button>
    
   </div>)

:<Button><Link href={'/login'}>Login</Link></Button>}
   
    </div>
  );
};

export default Navbar;