import React from 'react';

type  CreatePostProps = {
    handlePost: React.MouseEventHandler<HTMLElement>
};

export const CreatePost = ({ handlePost }: CreatePostProps) => {
    return (
        <button 
            className='md:hidden fixed bottom-0 left-0 w-full hover:cursor-pointer'
            onClick={handlePost}
        >
            <section className='bg-slate p-2 m-2 text-white font-semibold text-center'> 
                Create New Post
            </section>
        </button>
    );
};
