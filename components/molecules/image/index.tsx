import Image from 'next/image';
import React from 'react';

type ImageProps = {
    size: string;
    src: string;
    alt: string;
    isRound?: boolean;
}

export const ImageSrc = ({ src, alt, isRound = true, size = '60px' }: ImageProps) => {
    return (
        <span className={`relative w-[${size}] h-[${size}]`}>
            <Image
                src={src}
                fill={true}
                className={`${isRound && `rounded-full`} ring-1 ring-gray object-cover`}
                alt={alt}
            />
        </span>
    )
}
