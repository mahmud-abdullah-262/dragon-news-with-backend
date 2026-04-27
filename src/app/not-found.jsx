'use client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href={'/'}>
       <Button className={'font-bold bg-pink-800 text-white mt-6'}>Home</Button>
      </Link>
     
   
    
    </div>
  );
};

export default NotFound;