import Header from '@/components/shered/Header';
import Navbar from '@/components/shered/Navbar';
import { Montserrat } from 'next/font/google';
import React from 'react';
import { montserrat } from '../layout';

const AuthLayout = ({children}) => {
  return (
    <div className={`${montserrat.className}`}>
       
        <Navbar></Navbar>
        {children}
    </div>
  );
};

export default AuthLayout;