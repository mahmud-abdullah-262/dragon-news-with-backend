import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
      <Spinner></Spinner>
    </div>
  );
};

export default loading;