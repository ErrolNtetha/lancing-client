import React from 'react';
import ReactStars from 'react-rating-stars-component';

type Props = {
    value: number;
    edit?: boolean;
}

export const StarRating = ({ value, edit = false }: Props) => {
    return (
        <ReactStars 
            count={5}
            onChange={(newRating: number) => console.log(newRating)}
            size={18}
            color='lightgray'
            activeColor='#000'
            value={value}
            edit={edit}
        />
    );
};
