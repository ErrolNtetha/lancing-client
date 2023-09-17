'use client'

import Image from 'next/image';
import React from 'react';
import { AuthorizedRoute } from '../../../components/organisms/protectedRoutes/authorizedRoute';

export default function Outcome() {
  return (
      <AuthorizedRoute
          isClient={false}
          isApproved={false}
          authenticated={true}
      >
          <section className='container flex justify-center items-center h-[95vh]'>
              <section className='flex justify-center items-center text-sm md:text-md'>
                <section className='max-w-xs md:max-w-md'>
                    <section className='flex justify-center items-center mb-4'>
                        <Image
                            src='/assets/images/svg/checkMark.svg'
                            alt='check mark'
                            width={100}
                            height={100}
                        />
                    </section>
                    <h1 className='font-extrabold text-xl text-[blue] text-center'> Success! </h1>
                    <p className='text-center'>  
                        Your application has been successfully submitted for review.
                        This may take up to 3 days to review your profile.
                    </p>
                    <section className='flex justify-center m-3 gap-3'>
                        <button
                            type='button'
                            className='border-2 border-black font-semibold px-6 py-2 hover:bg-gray'
                            onClick={() => console.log('Profile button clicked!')}
                        >
                            My Profile 
                        </button>
                    </section>
                </section>
              </section>
          </section>
      </AuthorizedRoute>
  );
};
