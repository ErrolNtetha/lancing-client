import Head from 'next/head';
import React, { useState } from 'react';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Client } from '../../organisms/client/';
import { PostGig } from '../../organisms/client/post';
import { CreatePost } from '../../organisms/createPost';
import { Modal } from '../../organisms/modal';
import { Vendor } from '../../organisms/vendor';

export const ClientUI = () => {
    const [modal, setModal] = useState(false);
    const isClient = useProfileStore((state) => state.profile?.isClient);
    const renderUI = isClient ? <Vendor /> : <Client />;

    return (
        <>
            <Head>
                <title> Feed | Duello </title>
            </Head>

            {isClient && <CreatePost handlePost={() => setModal(!modal)} />}
            {modal && 
                <Modal>
                    <PostGig 
                        handleModalToggle={() => setModal(!modal)}
                    />
                </Modal>}
            {renderUI}
        </>
    );
};
