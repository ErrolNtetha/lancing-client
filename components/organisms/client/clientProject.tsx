import React, { useState } from 'react';
import { formatNumber } from '../../../utilities/format';
import { Modal } from '../modal';
import { Proposal } from './proposal';
import { MdVerifiedUser } from 'react-icons/md';
import { FiActivity, FiBriefcase, FiCalendar, FiClock, FiDollarSign } from 'react-icons/fi';
import { formatDistance } from 'date-fns';

type ClientProps = {
    names: {
        firstName: string;
        lastName: string;
    },
    projectId: string;
    occupation: string;
    createdAt: string;
    budget: number;
    avatar: string;
    project: {
        title: string;
        description: string;
        deadline: {
            seconds: Date | string | null;
        };
        contract: string;
        budget: number;
        skillLevel: string;
        files: number | null;
    };
    verifiedPayment: boolean;
    loading: boolean;
}

export const ClientProject: React.FC<ClientProps> = (props) => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    const {
        names: {
            firstName,
            lastName
        },
        occupation,
        createdAt,
        project,
        verifiedPayment,
        projectId
    } = props;

    const isDeadlineOn = project?.deadline?.seconds
        ? formatDistance(new Date(project.deadline.seconds), new Date(), { addSuffix: true }) 
        : 'Not Applicable';

    return (
        <section className='text-black text-[.8rem] md:text-sm my-3 border-2 border-gray bg-white shadow-md w-full md:w-[35rem] max-h-max p-2'>
            <section>
                <section className='flex items-center justify-between mb-4'>
                    <span className='flex gap-3'>
                        <span>
                            <h2 className='text-sm md:text-lg font-semibold'>{firstName} {lastName} </h2>
                            <p className='flex items-center gap-1'> {occupation} </p>
                            {verifiedPayment && <section className='flex items-center gap-1'> <MdVerifiedUser className='fill-[green]' /> Verified Payment </section>}
                        </span>
                    </span>
                    <span className='flex items-center gap-1 self-start'> <FiClock /> {createdAt} </span>
                </section>
                <section className='border border-gray p-2'>
                    <h5 className='font-semibold'>{project.title}</h5>
                    <p className='mb-2'> {project.description} </p>
                    <hr className='opacity-10' />
                    <section className='py-1 flex justify-between'>
                        <span className=''>
                            <p className='flex items-center gap-2'> <FiActivity /> {project.contract} </p>
                            <p className='flex items-center gap-2'> <FiCalendar /> {isDeadlineOn} </p>
                        </span>
                        <span className=''>
                            <p className='flex items-center gap-2'> <FiDollarSign /> R{formatNumber(project.budget)} </p>
                            <p className='flex items-center gap-2'> <FiBriefcase /> {project.skillLevel} </p>
                        </span>
                    </section>
                </section>
                <section className='flex justify-between items-center mt-2 text-sm'>
                    <span className='flex items-center gap-2'>
                        {/* <span className='flex items-center gap-1 hover:cursor-pointer'> <FiFolder /> {project.files} files </span> */}
                        {/* <span className='py-2 text-sm'> Budget: R{formatNumber(project.budget)} </span> */}
                    </span>
                    <button className='border-2 border-gray px-2 py-1 hover:cursor-pointer hover:bg-gray' onClick={handleModal}>
                        Send Proposal
                    </button>
                    { modal && 
                    <Modal>
                        <Proposal
                            handleModal={handleModal}
                            recipient={props.names}
                            budget={project.budget}
                            projectId={projectId}
                        />
                    </Modal> 
                    }
                </section>
            </section>
        </section>
    );
};
