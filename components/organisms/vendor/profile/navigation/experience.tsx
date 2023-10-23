import { formatDistance } from 'date-fns';
import format from 'date-fns/format';
import React from 'react';
import { FcBriefcase } from 'react-icons/fc';

type ExperienceProps = {
    experience: {
        company: string;
        responsibilities: string;
        position: string;
        startDate: Date | string;
        endDate: Date | string;
    }[];
}

export default function VendorExperience({ experience }: ExperienceProps) {
    console.log(experience);

    const noExperience = (
        <section className='flex justify-center items-center h-[400px]'>
            <section className='flex justify-center gap-3 items-center flex-col'>
                <FcBriefcase className='text-[8rem]' />
                <h2 className='font-semibold text-md'> No work experience to show. </h2>
            </section>
        </section>
    );

    const formatTheDistance = (item: any) => {
        if (item.startDate && item.endDate) {
            return formatDistance(new Date(item?.startDate.seconds), new Date(item?.endDate.seconds));
        }
    };
 
    const listOfWorkExperience = experience.map((item: any, index: number) => (
            <section className='border border-dashed border-gray p-2' key={index}>
                <p className='font-semibold text-md'> {item.company} </p>
                <p className='text-[darkgray]'> {item.position} </p>
                <p className='text-[darkgray]'> 
                    {item?.startDate && format(new Date(item?.startDate.seconds), 'MMM y')} - {item?.endDate.seconds ? format(new Date(item?.endDate.seconds), 'MMM y') : 'Present'} - {formatTheDistance(item)}
                </p>
                <br />
                {item.responsibilities && (
                    <section>
                        <h3 className='font-semibold text-md'> Responsibilities </h3> 
                        <p> {item.responsibilities} </p>
                    </section>
                )}
            </section>
    ));

    return (
        <>
            {experience.length > 0 ? listOfWorkExperience : noExperience}
        </>
    );
};
