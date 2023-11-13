import React from 'react';
import { Button } from '../../../@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../@/components/ui/dialog';
import List from './list';

export default function MyList() {
    return (
        <section className='m-3 md:container'>
            <List />

            {/* Button to add list */}
            <section className='fixed bottom-0 bg-background left-0 w-full p-2'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className='bg-primary font-bold w-full'>
                            Create New List
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle> Add New List </DialogTitle>
                        </DialogHeader>
                        <section>
                            Label
                        </section>
                        <DialogFooter>
                            <Button type='submit'> Create </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </section>
        </section>
    );
};
