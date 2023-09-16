import { addDoc, collection, doc, serverTimestamp, Timestamp } from 'firebase/firestore';
import React from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../../hooks/useAuth';
// import { formatNumber } from '../../../utilities/format';
import { Button } from '../../atoms/button';
// import { FormLabel } from '../../molecules/formLabel';
import { TextareaLabel } from '../../molecules/textArea';

type EnquiryProps = {
    handleModal: React.MouseEventHandler<HTMLElement>;
    recipient: {
        firstName: string;
        lastName: string;
    };
    uid: string;
}

export const EnquiryModal = ({ handleModal, recipient, uid }: EnquiryProps) => {
    const { register, handleSubmit } = useForm();
    const { currentUser } = useAuth();

    const handleEnquirySubmit = async (data: any) => {
        if (!data) {
            console.log('No data to send.');
            return;
        }

        const { message } = data;

        try {
            const messagesRef = collection(db, 'messages');
            await addDoc(messagesRef, {
                sender: doc(db, `users/${currentUser.uid}`),
                receiver: doc(db, `users/${uid}`),
                message,
                sentAt: serverTimestamp() 
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleEnquirySubmit)} className='z-30'>
            <section className='pt-3 z-10 px-3 mb-6'>
                <h3 className='font-semibold text-lg sticky top-0 bg-white-p'> Send Enquiry </h3>
                <p className='my-2'> To: <span className='font-bold'> {recipient.firstName} {recipient.lastName} </span> </p>
            </section>
            <section className='pb-3 px-3 z-10'>
                <TextareaLabel
                    placeholder='Type your enquiry message'
                    labelName='Message'
                    name='message'
                    required={true}
                    register={register}
                />
            </section>
            <section className='flex bg-white-p items-center gap-2 p-3 sticky bottom-0 left-0 w-full'>
                <Button
                    buttonText='Cancel'
                    className='border border-gray py-2 px-4 w-[50%] hover:cursor-pointer'
                    handleClick={handleModal}
                />
                <Button
                    buttonText='Send'
                    className='bg-slate text-white py-2 px-4 w-[50%] hover:cursor-pointer'
                    handleClick={handleEnquirySubmit}
                />
            </section>
        </form>
    );
};
