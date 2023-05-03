import React from 'react';
import ReactStars from 'react-rating-stars-component';

type Props = {
    value: number;
}

export const StarRating = ({ value }: Props) => {
    return (
        <ReactStars 
            count={5}
            onChange={(newRating: number) => console.log(newRating)}
            size={18}
            activeColor='#ffd700'
            value={value}
        />
    );
};
