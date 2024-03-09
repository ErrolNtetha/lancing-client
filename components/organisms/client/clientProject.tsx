import React, { useEffect, useState } from 'react';
import { formatNumber } from '../../../utilities/format';
import { Modal } from '../modal';
import { Proposal } from './proposal';
import { MdVerifiedUser } from 'react-icons/md';
import { FiActivity, FiBriefcase, FiCalendar, FiCheckCircle, FiClock, FiDollarSign } from 'react-icons/fi';
import { formatDistance } from 'date-fns';
import { Button } from '../../../@/components/ui/button';
import Link from 'next/link';

type ClientProps = {
    postedBy: {
        names: {
            firstName: string;
            lastName: string;
        };
        verifiedPayment: boolean;
        occupation: string;
    };
    projectId: string;
    createdAt: {
        seconds: Date | string | null;
    };
    title: string;
    description: string;
    deadline: {
        seconds: Date | string | null;
    };
    contract: string;
    budget: number;
    skillLevel: string;
    files: number | null;
    loading: boolean;
}

export const ClientProject: React.FC<ClientProps> = (props) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const {
        postedBy,
        createdAt,
        title,
        projectId,
        deadline,
        description,
        budget,
        skillLevel,
        contract,
    } = props;

    const { 
        names: {
            firstName,
            lastName
        },
        verifiedPayment,
        occupation,
    } = postedBy;

    const hasVerifiedPayment = verifiedPayment ? 'Unverified Payment' : 'Verified Payment';
    const deadlineTime = deadline?.seconds
        ? formatDistance(new Date(Number(deadline.seconds) * 1000), new Date(), { addSuffix: true }) 
        : 'Not Applicable';

    const createdAtTime = createdAt?.seconds
        ? formatDistance(new Date(Number(createdAt.seconds) * 1000), new Date(), { addSuffix: true }) 
        : 'Not Applicable';

    return (
        <section className='text-black text-sm md:text-sm my-3 border-2 border-gray bg-white shadow-md w-full md:w-full max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-3'>
                        <span>
                            <h2 className='text-sm md:text-lg font-semibold'>{firstName} {lastName} </h2>
                            <p className='flex items-center gap-1'> {occupation} </p>
                            <section className='flex items-center gap-1'> <FiCheckCircle className={verifiedPayment ? 'fill-[green]' : 'fill-gray-200' } /> {hasVerifiedPayment} </section>
                        </span>
                    </span>
                    <span className='flex items-center gap-1 self-start'> <FiClock /> {createdAtTime} </span>
                </section>
                <section className='border border-gray p-2'>
                    <h5 className='font-semibold'>{title}</h5>
                    <p className='mb-2'> {description} </p>
                    <hr className='opacity-10' />
                    <section className='py-1 flex justify-between'>
                        <span className=''>
                            <p className='flex items-center gap-2'> <FiActivity /> {contract} </p>
                            <p className='flex items-center gap-2'> <FiCalendar /> {deadlineTime} </p>
                        </span>
                        <span className=''>
                            <p className='flex items-center gap-2'> <FiDollarSign /> R{formatNumber(budget)} </p>
                            <p className='flex items-center gap-2'> <FiBriefcase /> {skillLevel} </p>
                        </span>
                    </section>
                </section>
                <section className='flex justify-between items-center mt-2 text-sm'>
                    <span className='flex items-center gap-2'>
                        {/* <span className='flex items-center gap-1 hover:cursor-pointer'> <FiFolder /> {project.files} files </span> */}
                        {/* <span className='py-2 text-sm'> Budget: R{formatNumber(project.budget)} </span> */}
                    </span>
                    <Button
                        variant='outline'
                        asChild
                        >
                            <Link href={`/projects/${projectId}/create-proposal`}> Send Proposal </Link>
                    </Button>
                </section>
            </section>
        </section>
    );
};
