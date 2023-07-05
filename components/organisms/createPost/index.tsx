import React from 'react';

type  CreatePostProps = {
    handlePost: React.KeyboardEventHandler<HTMLElement>
};

export const CreatePost = ({ handlePost }: CreatePostProps) => {
    return (
        <section className='md:hidden fixed bottom-0 left-0 w-full hover:cursor-pointer' role='button' onKeyUp={handlePost}>
            <section className='bg-slate p-2 m-2 text-white font-semibold text-center'> 
                New Gig
            </section>
        </section>
    );
};
