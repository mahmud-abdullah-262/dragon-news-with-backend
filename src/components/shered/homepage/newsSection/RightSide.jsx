'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
  const signInWithGoogle = async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  // console.log(data, 'data')
  }

  const signInWithGithub = async () => {
     const data = await authClient.signIn.social({
        provider: "github"
    })
    //  console.log(data, 'data')
  }
  return (
    <div>
       <h1 className="text-center font-semibold mb-4">Login With</h1>

       <div className='flex flex-col gap-2'>
        <Button className="w-full" variant="tertiary" onClick={() => signInWithGoogle()}>
       <FaGoogle />
        Sign in with Google
      </Button>
      <Button className="w-full" variant="tertiary" onClick={() => signInWithGithub()}>
        <FaGithub />
        Sign in with GitHub
      </Button>
       </div>

       <div>
        <h1 className="text-center font-semibold my-4">Find Us on</h1>
          <div className='border rounded-xl bg-slate-50'>
            <div className='flex gap-2 items-center border-b p-4'>
              <Icon icon="devicon:facebook" width="20" height="20" />
              <p>Facebook</p>
            </div>
            <div className='flex gap-2  items-center border-b p-4'>
              <Icon icon="devicon:twitter" width="20" height="20" />
              <p>X</p>
            </div>
            <div className='flex gap-2 items-center border-b p-4'>
              <Icon icon="devicon:behance" width="20" height="20" />
              <p>Behance</p> 
            </div>
          </div>
       </div>
    </div>
  );
};

export default RightSide;