import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../../../../@/components/ui/avatar';

export default function ImageGuidelines() {
    return (
        <section className='p-3'>
            <section className='text-xs mb-4 bg-gray-100 rounded-sm border border-gray-300 p-3'>
                <h2 className='font-bold'> Note:  </h2>
                <p className=''>
                    Please provide an image based on below 
                    guidelines for better chances of your profile 
                    getting accepted.
                </p>
            </section>
            <section className='flex items-center justify-center p-4'>
                <Avatar className='w-36 h-36 rounded-full border border-gray-400'>
                    <AvatarImage
                        className='object-cover'
                        src='/images/users/avatar.jpg'
                        alt='Sample image of how freelancer user profile should look like' />
                    <AvatarFallback>
                        User Image
                    </AvatarFallback>
                </Avatar>
            </section>
            <h5 className='text-sm font-bold'>
                Tips:
            </h5>
            <ul className='text-sm list-disc'>
                <li> Image should pimarily focus on your face. </li>
                <li> Present a natural and unfiltered appearance. </li>
                <li> Neutral background that does not distract from the main subject. </li>
                <li> Image should only feature only yourself. No group shots. </li>
                <li> Use natural light for a well-lit and even appearance.  </li>
                <li> Image should be of high resolution. </li>
            </ul>
        </section>
    );
}
