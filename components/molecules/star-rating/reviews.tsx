import Link from 'next/link';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

type Props = {
    value: number;
    reviews: [];
    href: string;
}

export const Reviews = ({ value, reviews, href }: Props) => {
    const isPlural = reviews.length > 1 ? 'reviews' : 'review';
    const hasReviews = reviews.length ? isPlural : 'No reviews';

    return (
        <section className='flex items-center gap-3 text-sm'>
            <ReactStars 
                count={5}
                onChange={(newRating: number) => console.log(newRating)}
                size={14}
                color='lightgray'
                activeColor='#000'
                value={value}
                edit={false}
            />
            <span className='flex items-center gap-3'>
                ({value/5}) <Link href={href} className='text-[blue]'> {reviews.length} {hasReviews} </Link>
            </span>
        </section>
    );
};
