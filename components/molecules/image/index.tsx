import Image from 'next/image';
import React from 'react';

type ImageProps = {
    size: string;
    src: string;
    alt: string;
    isRounded?: boolean;
}

export const ImageSrc = ({ src, alt, isRounded = true, size }: ImageProps) => {
    return (
        <span className={`relative w-[${size}] h-[${size}]`}>
            <Image
                src={src}
                fill={true}
                className={`${isRounded && `rounded-full`} ring-1 ring-gray object-cover h-full`}
                alt={alt}
            />
        </span>
    );
};
