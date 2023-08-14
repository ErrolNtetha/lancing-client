import { doc, setDoc, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '../../../firebaseConfig';
import { useAuth } from '../../../hooks/useAuth';
import { formatNumber } from '../../../utilities/format';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { TextareaLabel } from '../../molecules/textArea';

type ProposalProps = {
    handleModal: React.MouseEventHandler<HTMLElement>;
    projectId: string;
    budget: number;
    recipient: {
        firstName: string;
        lastName: string;
    };
}

export const Proposal = ({ handleModal, projectId, recipient, budget }: ProposalProps) => {
    const [loading, setLoading] = useState<boolean | null>(null);
    const { register, handleSubmit } = useForm();
    const userAuth = useAuth();

    const handleProposalSubmit = async (data: any) => {
        if (!data) {
            return;
        }

        setLoading(true);

        try {
            const projectRef = doc(db, 'projects', projectId, 'proposals', userAuth.uid);

            await setDoc(projectRef, {
                ...data,
                createdAt: Timestamp.now(),
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleProposalSubmit)} className='z-30'>
            <section className='pt-3 z-10 px-3 mb-6'>
                <h3 className='font-semibold text-lg sticky top-0 bg-white-p'> Send Proposal </h3>
                <p className='my-2'> To: <span className='font-bold'> {recipient.firstName} {recipient.lastName} </span> </p>
                <p className='my-2'> Budget: <span className=''> R{formatNumber(budget)} </span> </p>
            </section>
            <section className='pb-3 px-3 z-10'>
                <FormLabel
                    labelName='Subject'
                    type='text'
                    placeholder='Type a subject'
                    name='subject'
                    register={register}
                    required={true}
                />
                <TextareaLabel
                    placeholder='Type proposal message'
                    labelName='Description'
                    name='description'
                    required={true}
                    register={register}
                />
            </section>
            <section className='flex bg-white-p items-center gap-2 p-3 sticky bottom-0 left-0 w-full'>
                <Button
                    buttonText='Close'
                    className='border border-gray py-2 px-4 w-[50%] hover:cursor-pointer'
                    handleClick={handleModal}
                />
                <Button
                    buttonText={loading ? 'Submittting' : 'Submit'}
                    className='bg-slate text-white py-2 px-4 w-[50%] hover:cursor-pointer'
                    handleClick={handleProposalSubmit}
                />
            </section>
        </form>
    );
};
