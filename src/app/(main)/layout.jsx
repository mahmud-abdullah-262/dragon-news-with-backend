import BreakingNews from '@/components/shered/BreakingNews';
import Header from '@/components/shered/Header';
import Navbar from '@/components/shered/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
  return (
    <>
       <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        {children}
    </>
  );
};

export default MainLayout;