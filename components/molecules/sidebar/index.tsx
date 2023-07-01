import React from 'react';
import { PostGig } from '../../organisms/client/post';
import { Modal } from '../../organisms/modal';

export const Sidebar = () => {
    const [modal, setIsModal] = React.useState(false);
    return (
        <aside className='hidden p-2 max-h-max flex-[.4] md:block'>
            <ul>
                <li className='bg-slate text-black p-2 hover:cursor-pointer'>
                    <button className='text-white text-center w-full' onClick={() => setIsModal(!modal)}> Post </button>
                    {modal && (
                        <Modal>
                            <PostGig handleModalToggle={() => setIsModal(!modal)} />
                        </Modal>
                    )}
                </li>
            </ul>
        </aside>
    );
};
