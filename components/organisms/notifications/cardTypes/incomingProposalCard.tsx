import React from 'react'
import { FiCornerRightDown } from 'react-icons/fi';
import CardContainer from './cardContainer';

type IncomingProposalCardProps = {
    user: {
        firstName: string;
        lastName: string;
    };
    href: string;
    title: string;
    iconsClassName: string;
    createdAt: {
        nanoseconds: string | number;
    };
}

export default function IncomingProposalCard({ user, href, iconsClassName, createdAt }: IncomingProposalCardProps) {
    const username = <span className='font-bold'>{user?.firstName} {user?.lastName}</span>;
    const title = <span className='font-bold'>Urgently seeking a Graphic Designer</span>;

    return (
        <CardContainer
            href={href}
            icon={<FiCornerRightDown className={iconsClassName} />}
            createdAt={createdAt}
        >
            <section className='mb-1'>
                <h6 className='pb-1'> 
                    You have received a new proposal.
                </h6>
                <section className='p-2 border border-gray-200 bg-gray-100 rounded-md'>
                    <p className='text-xs'> {username} has sent you a new proposal for &apos;{title}&apos;. Check it now. </p>
                </section>
            </section>
        </CardContainer>
    );
}
