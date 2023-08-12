import React, { useState } from 'react';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Sidebar } from '../../molecules/sidebar';
import { Client } from '../../organisms/client/';
import { PostGig } from '../../organisms/client/post';
import { CreatePost } from '../../organisms/createPost';
import { Modal } from '../../organisms/modal';
import { Vendor } from '../../organisms/vendor';

export const ClientUI = () => {
    const [modal, setModal] = useState(false);
    const isClient = useProfileStore((state: any) => state.profile?.isClient);
    const renderUI = isClient ? <Vendor /> : <Client />;

    /*
     * ***** Messages Collection ******
     *
     * messages ===> dlxseiYdabaNa3a ===> [{...}]
     * {
     *   conversation_id: 12345,
     *   time: 453425645231,
     *   users: [user1, user2],
     *   messages: [
     *      {
     *          sender: 'user1',
     *          subject: 'Looking for Graphic Designer',
     *          message: 'Can you complete it by month end?',
     *          timestamp: '2922223',
     *      },
     *      {
     *          sender: 'user2',
     *          subject: 'Re: Looking for Graphic Designer',
     *          message: 'Yes i can do it. Why?',
     *          timestamp: '93232134',
     *      }],
     *      total_messages: 2,
     * }
     *
     */

    return (
        <>
            <section className='md:flex w-full justify-around'>
                <Sidebar messages={1} />
                {renderUI}
                <aside className='hidden flex-[.4] p-2 md:block' />
            </section>
            {isClient && <CreatePost handlePost={() => setModal(!modal)} />}
            {modal && (
                <Modal>
                    <PostGig 
                        handleModalToggle={() => setModal(!modal)}
                    />
                </Modal>
            )}
        </>
    );
};
