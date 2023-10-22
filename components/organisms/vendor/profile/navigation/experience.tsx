import { formatDistance } from 'date-fns';
import format from 'date-fns/format';
import React from 'react';
import { FcBriefcase } from 'react-icons/fc';
import { useVendorExperienceStore } from '../../../../../hooks/useGlobalStore';

export default function VendorExperience() {
    const { vendorExperience } = useVendorExperienceStore();
    console.log(vendorExperience);

    const noExperience = (
        <section className='flex justify-center items-center h-[400px]'>
            <section className='flex justify-center gap-3 items-center flex-col'>
                <FcBriefcase className='text-[8rem]' />
                <h2 className='font-semibold text-md'> No work experience to show. </h2>
            </section>
        </section>
    );

    const formatTheDistance = (item: any) => {
        if (item.from && item.to) {
            return formatDistance(new Date(item?.from), new Date(item?.to));
        }
    };
 
    const listOfWorkExperience = vendorExperience.map((item: any, index: number) => (
            <section className='border border-dashed border-gray p-2' key={index}>
                <p className='font-semibold text-md'> {item.company} </p>
                <p className='text-[darkgray]'> {item.position} </p>
                <p className='text-[darkgray]'> 
                    {item?.startDate && format(new Date(item?.startDate), 'MMM y')} - {item?.endDate ? format(new Date(item?.endDate), 'MMM y') : 'Present'} - {formatTheDistance(item)}
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

    return vendorExperience.length > 0 ? listOfWorkExperience : noExperience;
};
