/* eslint-disable  react-hooks/exhaustive-deps */
'use client'

import { collection, DocumentReference, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebaseConfig';
import withAuth from '../../../hoc/withAuth';
import { useAuth } from '../../../hooks/useAuth';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { Sidebar } from '../../molecules/sidebar';
import { Client } from '../../organisms/client/';
import { PostGig } from '../../organisms/client/post';
import { CreatePost } from '../../organisms/createPost';
import { Modal } from '../../organisms/modal';
import { Vendor } from '../../organisms/vendor';

const ClientUI = () => {
    const [modal, setModal] = useState(false);
    const isClient = useProfileStore((state: any) => state.profile?.isClient);
    const renderUI = isClient ? <Vendor /> : <Client />;
    const { currentUser } = useAuth();

    useEffect(() => {
        async function getAuthor(authorRef: DocumentReference<unknown>) {
            if (authorRef) {
                try {
                    const author = await getDoc(authorRef);
                    if (author.exists()) {
                        return author.data();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        async function getProject(projectRef: DocumentReference<unknown>) {
            if (projectRef) {
                try {
                    const author = await getDoc(projectRef);
                    if (author.exists()) {
                        return author.data();
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

        async function getProposals() {
            const proposalsRef = collection(db, 'proposals');
            try {
                const querySnapshot = await getDocs(proposalsRef);
                const documents = querySnapshot.docs;
                for (let doc of documents) {
                    const { sentBy, project } = doc.data();
                
                    if (sentBy && project) {
                        const author = await getAuthor(sentBy);
                        const projectDoc = await getProject(project);
                    }
                }

            } catch (error) {
                console.log(error);
            }
        };

        async function getMessages() {
            const messagesRef = collection(db, 'messages');
            try {
                const querySnapshot = query(messagesRef, where('user', '==', `user/${currentUser.uid}`));
                console.log('Message document: ', querySnapshot);

            } catch (error) {
                console.log(error);
            }
        };

        getMessages();
        getProposals();
    }, []);

    return (
        <>
            <section className='md:container md:flex w-full justify-center'>
                <section className='md:flex w-full justify-center'>
                    <Sidebar 
                        className='hidden p-2 max-h-max flex-[.3] md:block'
                        messages={0}
                        proposals={0}
                    />
                        <section className='flex-[.5] border border-gray md:p-2 min-h-[92vh]'> {renderUI} </section>
                    <aside className='hidden flex-[.3] p-2 md:block' />
                </section>
            </section>

            {/* Floating button for clients to create a new project */}
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

export default withAuth(ClientUI);
