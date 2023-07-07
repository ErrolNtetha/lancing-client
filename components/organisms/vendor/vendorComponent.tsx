import Image from 'next/image';
import React, { useState } from 'react';
import { FiSend, FiUser } from 'react-icons/fi';
import { StarRating } from '../../molecules/star-rating';
import { Modal } from '../modal';
import { EnquiryModal } from './enquiryModal';
import { PortfolioModal } from './portfolioModal';

type VendorProps = {
    recipient: {
        firstName: string;
        lastName: string;
    },
    avatar: string;
    service: string;
    rating: number;
    pitchText: string;
};

export const VendorComponent = ({ 
    avatar,
    recipient,
    service,
    rating,
    pitchText
}: VendorProps) => {
    const [modal, setModal] = useState(false);
    const [viewPortfolio, setViewPortfolio] = useState(false);

    const handleModal = () => setModal(!modal);
    return (
        <section className='text-black text-[.8rem] md:text-sm my-3 border border-gray bg-white shadow-md w-full md:w-[35rem] max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-3'>
                        <span className='relative w-[60px] h-[60px]'>
                            <Image
                                src={avatar}
                                alt={`${recipient.firstName}&apos;s avatar`}
                                fill={true}
                                className='rounded-full ring-1 ring-gray object-cover'
                            />
                        </span>
                        <span>
                            <h2 className='text-md md:text-lg font-semibold'>{recipient.firstName} {recipient.lastName} </h2>
                            <p className='flex items-center gap-1'> {service} </p>
                            <p className='flex items-center gap-1'></p>
                        </span>
                    </span>
                    { /* <span className='self-start'> <FiMoreHorizontal /> </span> */ }
                </section>
                <p className='mb-4'> {pitchText} </p>
                <span className='flex items-center gap-2'> <StarRating value={rating} /> ({rating}/5) </span>
                <hr className='opacity-10 mb-2' />
                <section className='flex justify-between items-center text-sm'>
                    <span className='flex items-center gap-2'>
                        <span className='flex items-center gap-1 hover:cursor-pointer' onClick={() => setViewPortfolio(!viewPortfolio)}> <FiUser /> View </span>|
                        <span className='py-2 text-[.7rem]'> From: R2,000 </span>
                    </span>

                    <span className='flex items-center gap-2 border-2 border-gray px-2 py-1 hover:cursor-pointer hover:bg-gray' onClick={handleModal}>
                        <FiSend /> Enquire
                    </span>
                    {viewPortfolio && (
                        <Modal>
                            <PortfolioModal 
                                handleModal={() => setViewPortfolio(!viewPortfolio)}
                            />
                        </Modal> 
                    )}
                    { modal && 
                        <Modal>
                            <EnquiryModal
                                handleModal={handleModal}
                                recipient={recipient}
                            />
                        </Modal> 
                    }
                </section>
            </section>
        </section>
    );
};
