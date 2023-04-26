import Image from 'next/image';
import React, { useState } from 'react';
import { formatNumber } from '../../../utilities/format';
import { Modal } from '../modal';
import { Proposal } from './proposal';
import { MdVerifiedUser } from 'react-icons/md';
import { FiImage } from 'react-icons/fi';

type ClientProps = {
    name: {
        firstName: string;
        lastName: string;
    },
    occupation: string;
    projectDescription: string;
    projectDuration: string;
    createdAt: string;
    photos: number;
    budget: number;
    avatar: string;
    verifiedPayment: boolean;
}

export const ClientProject: React.FC<ClientProps> = (props) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const {
        name: {
            firstName,
            lastName
        },
        occupation,
        projectDuration,
        createdAt,
        projectDescription,
        photos,
        budget,
        avatar,
        verifiedPayment
    } = props;

    return (
        <section className='text-black text-[.8rem] md:text-sm my-3 border border-gray bg-white shadow-md w-full md:w-[35rem] max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-3'>
                        <Image
                            src={avatar}
                            alt={`${firstName}&apos;s avatar`}
                            width={60}
                            height={60}
                            className='rounded-full ring-1 ring-gray object-cover'
                        />
                        <span>
                            <h2 className='text-sm md:text-lg font-semibold'>{firstName} {lastName} </h2>
                            <p className='flex items-center gap-1'> {occupation} {verifiedPayment && <MdVerifiedUser />} </p>
                            <p> {projectDuration} </p>
                        </span>
                    </span>
                    <span className='self-start'> {createdAt} </span>
                </section>
                <p className='mb-2'> {projectDescription} </p>
                <hr className='opacity-10 my-2' />
                <section className='flex justify-between items-center text-sm'>
                    <span className='flex items-center gap-2'>
                        <span className='flex items-center gap-1 hover:cursor-pointer'> <FiImage /> {photos} photos </span>|
                        <span className='py-2 text-[.7rem]'> Budget: R{formatNumber(budget)} </span>
                    </span>
                    <span className='border-2 border-gray px-2 py-1 hover:cursor-pointer hover:bg-gray' onClick={handleModal}>
                        Send Proposal
                    </span>
                    { modal && 
                    <Modal>
                        <Proposal
                            handleModal={handleModal}
                            recipient={props.name}
                            budget={budget}
                        />
                    </Modal> 
                    }
                </section>
            </section>
        </section>
    );
};
