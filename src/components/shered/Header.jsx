import React from 'react';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { format } from 'date-fns';
import BreakingNews from './BreakingNews';

const Header = () => {
  return (
    <div className='text-center space-y-2 p-8'>
     <Image src={logo} width={300} height={150} alt='logo' className='mx-auto'></Image>
     <p className='text-md text-gray-700'>Journalism Without Fear or Favour</p>
     <p>{format(new Date(), "EEEE, LLLL dd, yyyy")}</p>
     
    </div>
  );
};

export default Header;