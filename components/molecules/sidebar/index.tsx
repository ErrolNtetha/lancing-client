import Link from 'next/link';
import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { PostGig } from '../../organisms/client/post';
import { Modal } from '../../organisms/modal';
import { DigitCounter } from '../digitCounter';

type SidebarProps = {
    messages: number;
}

export const Sidebar = ({ messages }: SidebarProps) => {
    const [modal, setIsModal] = React.useState(false);
    const { isClient } = useProfileStore().profile;

    return (
        <aside className='hidden p-2 max-h-max flex-[.4] md:block'>
            <ul className='divide-gray p-2'>
                <li className='hover:cursor-pointer hover:bg-gray p-2'>
                    <Link href='/messages' className='flex items-center justify-between'>
                        <span className='flex items-center gap-3'> <FiMessageSquare /> Messages </span>
                        <DigitCounter count={messages} />
                    </Link>
                </li>
                {isClient && (
                    <li className='bg-slate text-black p-2 hover:cursor-pointer'>
                        <button className='text-white text-center w-full' onClick={() => setIsModal(!modal)}> Post </button>
                    {modal && (
                        <Modal>
                            <PostGig handleModalToggle={() => setIsModal(!modal)} />
                        </Modal>
                    )}
                </li>
                )}
            </ul>
        </aside>
    );
};
