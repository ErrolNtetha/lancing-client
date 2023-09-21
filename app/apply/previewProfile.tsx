import { format, formatDistance } from 'date-fns';
import React from 'react';
import { useExperienceStore } from '../../hooks/useGlobalStore';

interface PProps {
    component: React.ReactNode;
    getValues: any;
    methods: any
}

export const PreviewProfile = ({ component, getValues, methods }: PProps) => {
    const { personal, work } = getValues();
    const { experience } = useExperienceStore();
    console.log(getValues());
    const { useFieldArray, control } = methods;

    const { fields } = useFieldArray({ control, name: 'education' });
    console.log(fields);

    const listOfExperience = experience.map((item: any, index: number) => (
        <section key={index} className='my-3'>
            <section className='border border-dashed border-gray p-2'>
                <p className='font-semibold text-md'> {item.companyName} </p>
                <p className='text-[darkgray]'> {item.position} </p>
                <p className='text-[darkgray]'> 
                    {format(item.from, 'MMM y')} - {item.to ? format(item.to, 'MMM y') : 'Present'} - {formatDistance(item.from, item.to || new Date())}
                </p>
                <br />
                {item.description && (
                    <section>
                        <h3 className='font-semibold text-md'> Responsibilities </h3> 
                        <p> {item.description} </p>
                    </section>
                )}
            </section>
        </section>
    ));

    return (
        <section>
            <section>
                <h3 className='font-semibold text-md text-gray'> Preview Profile </h3>
                <h3 className='font-semibold text-2xl'>
                    Done. Confirm if everything is correct and submit your profile.
                </h3>
                <p className='text-md mb-4'> </p>
            </section>
            <section className='mb-4 border-1 border border-gray p-2 rounded-md'>
                <p className=''> {personal.title || 'No title...'} </p>
                <h3 className='font-semibold'> Overview </h3>
                <section>
                    <p> {personal.bio || 'No bio...'} </p>
                </section>
            </section>

            <section className='border-1 border border-gray p-2 rounded-md'>
                <h3 className='font-semibold'> Work Experience </h3>
                {experience.length === 0
                    ? (
                        <section
                            className='flex justify-center py-10 px-5'
                        >
                            <section className='flex flex-col justify-center items-center'>
                                <h2 className='mt-3 text-md'> No work experience to show. </h2>
                            </section>
                        </section>
                    )
                    : listOfExperience}
            </section>
            <section>{component}</section>
        </section>
    );
};
