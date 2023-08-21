import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
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

    useEffect(() => {
        const proposalsRef = collection(db, 'proposals');

        async function getProposals() {
            try {
                const querySnapshot = await getDocs(proposalsRef);
                const documents = querySnapshot.docs;
                for (let doc of documents) {
                    console.log(doc.data());
                }

            } catch (error) {
                console.log(error);
            }
        };

        getProposals();
    }, []);

    return (
        <>
            <section className='md:flex w-full justify-around'>
                <Sidebar 
                    messages={1} 
                    proposals={3}
                />
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
