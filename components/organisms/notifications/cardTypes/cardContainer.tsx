import Link from 'next/link';
import React from 'react'

type IncomingOfferCardProps = {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    createdAt: {
        nanoseconds: string | number;
    }
}

export default function CardContainer({ icon, href, children, createdAt }: IncomingOfferCardProps) {
    // const username = <span className='font-bold'>{user?.firstName} {user?.lastName}</span>;
    
    return (
        <Link href={href} className='bg-gray-100 max-md:p-3 md:container text-sm flex gap-2'>
            <span> {icon} </span>
            <section className='flex-1'>
                <section className='mb-2'>
                    {children}
                </section>
                <section className='text-xs'> {createdAt.nanoseconds} </section>
            </section>
        </Link>
    );
}
