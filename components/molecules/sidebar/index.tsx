import Link from 'next/link';
import React from 'react';
import { FiCornerDownRight, FiMessageSquare } from 'react-icons/fi';
import { Button } from '../../../@/components/ui/button';
import { DigitCounter } from '../digitCounter';

type SidebarProps = {
    messages: number;
    proposals: number;
    className: string;
    isClient: boolean;
    dialogTriggerRef: any;
}

export const Sidebar = ({ className, messages, proposals, isClient, dialogTriggerRef }: SidebarProps) => {
    return (
        <aside className={className}>
            <ul className='divide-gray p-2 space-y-2'>
                <li className='hover:cursor-pointer hover:bg-gray p-2'>
                    <Link href='/messages' className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'> <FiMessageSquare /> Messages </span>
                        <DigitCounter count={messages} />
                    </Link>
                </li>
                <li className='hover:cursor-pointer hover:bg-gray p-2'>
                    <Link href='/myprojects' className='flex items-center justify-between'>
                        <span className='flex items-center gap-2'> <FiCornerDownRight /> My Projects </span>
                        <DigitCounter count={proposals} />
                    </Link>
                </li>
                {isClient && (
                    <li className='bg-slate text-black p-2 hover:cursor-pointer'>
                        <Button className='bg-primary text-white text-center w-full' onClick={() => dialogTriggerRef.current.click()}>
                            Create New Post
                        </Button>
                </li>
                )}
            </ul>
        </aside>
    );
};
