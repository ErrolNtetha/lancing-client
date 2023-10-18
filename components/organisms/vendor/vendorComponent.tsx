import Link from 'next/link';
import React, { useState } from 'react';
import { FiSend, FiUser } from 'react-icons/fi';
import { VendorProps } from '../../../types';
// import { formatAmount } from '../../../utilities/format';
import { Avatar } from '../../molecules/image';
import { StarRating } from '../../molecules/star-rating';
import { Modal } from '../modal';
import { EnquiryModal } from './enquiryModal';
import { PortfolioModal } from './viewPortfolio/';

export const VendorComponent = ({
    avatar,
    names,
    title,
    rating,
    bio,
    reviews,
    id,
}: VendorProps) => {
    const [modal, setModal] = useState(false);
    const [viewPortfolio, setViewPortfolio] = useState(false);
    const handleModal = () => setModal(!modal);
    const isPlural = reviews.length > 1 ? 'reviews' : 'review';
    const clientReviews = !reviews.length ? 'No reviews' : `${reviews.length} ${isPlural}`;

    return (
        <section className='text-black text-[.8rem] md:text-sm my-3 border border-gray bg-white shadow-md w-full md:w-[35rem] max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-2'>
                        <Avatar
                            src={avatar}
                            alt={`${names.firstName}&apos;s avatar`}
                            size='w-14 h-14'
                        />
                        <span>
                            <h2 className='text-md md:text-lg font-semibold'>{names.firstName} {names.lastName} </h2>
                            <p className='flex items-center gap-1'> {title} - <Link className='text-[blue]' href='/postId/reviews'> {clientReviews} </Link> </p>
                            <span className='flex items-center gap-1'> <StarRating value={rating} /> ({rating}/5) </span>
                        </span>
                    </span>
                    { /* <span className='self-start'> <FiMoreHorizontal /> </span> */ }
                </section>
                <p className='mb-4'> {bio} </p>
                <hr className='opacity-10 mb-2' />
                <section className='flex justify-between items-center text-sm'>
                    <span className='flex items-center gap-2'>
                        <button className='flex items-center gap-1 hover:cursor-pointer'onClick={() => setViewPortfolio(!viewPortfolio)}> <FiUser /> View </button>
                        {/* | <span className='py-2 text-[.7rem]'> From: R{formatAmount(amount)} { percent && ` | ${percent}%`}  </span> */}
                    </span>

                    <button className='flex items-center gap-2 border border-gray px-2 py-1 hover:cursor-pointer hover:bg-gray' onClick={handleModal}>
                        <FiSend /> Enquire
                    </button>
                    {viewPortfolio && (
                        <Modal>
                            <PortfolioModal 
                                name={names}
                                title={title}
                                handleModal={() => setViewPortfolio(!viewPortfolio)}
                            />
                        </Modal> 
                    )}
                    { modal && 
                        <Modal>
                            <EnquiryModal
                                handleModal={handleModal}
                                recipient={names}
                                uid={id}
                            />
                        </Modal> 
                    }
                </section>
            </section>
        </section>
    );
};

