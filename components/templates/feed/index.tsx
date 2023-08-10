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

    return (
        <>
            <section className='md:flex w-full justify-around'>
                <Sidebar />
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
