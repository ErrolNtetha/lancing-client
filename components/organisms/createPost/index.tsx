import React from 'react';
import { Button } from '../../../@/components/ui/button';

type  CreatePostProps = {
    DialogTrigger: any
};

export const CreatePost = ({ DialogTrigger }: CreatePostProps) => {
    return (
        <Button 
            className='md:hidden fixed bottom-0 left-0 w-full hover:cursor-pointer'
            asChild
        >
            <DialogTrigger className='bg-primary p-2 m-2 font-semibold text-center'> 
                Create New Project
            </DialogTrigger>
        </Button>
    );
};
