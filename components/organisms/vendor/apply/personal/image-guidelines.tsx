import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../../../../@/components/ui/avatar';

export default function ImageGuidelines() {
    return (
        <section className='p-3'>
            <section className='flex items-center justify-center p-4'>
                <Avatar className='w-36 h-36 rounded-full border-1 border-black'>
                    <AvatarImage className='object-cover' src='/images/users/avatar.jpg' alt='Sample image of how freelancer user profile should look like' />
                    <AvatarFallback>
                        CU
                    </AvatarFallback>
                </Avatar>
            </section>
                <h5 className='text-sm font-bold'>
                    Recommended image guidelines:
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
