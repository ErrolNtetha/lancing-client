import Image from 'next/image';
import React from 'react';

export type ImageProps = {
    size: string;
    src: string;
    alt: string;
    isRounded?: boolean;
}

export const ImageSrc = ({ src, alt, isRounded = true, size }: ImageProps) => {
    return (
        <span className={`relative ${size}`}>
            <Image
                src={src}
                fill={true}
                className={`${isRounded && 'rounded-full'} ring-1 ring-gray object-cover h-full`}
                alt={alt}
            />
        </span>
    );
};

export const Avatar = ({ src, size, alt }: ImageProps) => {
    return (
        src 
        ? <ImageSrc size={size} src={src} alt={alt} /> 
        : <ImageSrc size={size} src='/assets/images/defaultAvatar.png' alt={alt} />
    );
};
