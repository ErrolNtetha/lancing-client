// import { format } from 'date-fns';
import { format, isPast } from 'date-fns';
import React, { useState } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../components/atoms/button';
import { DatePicker } from '../../components/molecules/datePicker';
import { FormLabel } from '../../components/molecules/formLabel';
import { Modal } from '../../components/organisms/modal';
import { useEducationStore } from '../../hooks/useGlobalStore';

interface EProps {
    register: Function;
    component: React.ReactNode;
    errors: FieldErrors<FieldValues>;
    getValues: any;
}

export const Education = ({ register, component, errors, getValues }: EProps) => {
    const [modal, setModal] = useState(false);
    const  { education, addEducation } = useEducationStore();

    const handleEducation = () => {
        const { school } = getValues();
        addEducation(school);
        setModal(false);
    };

    const listOfQualifications = education.map((item: any, index: number) => (
        <section key={index} className='my-3'>
            <section className='border border-dashed border-gray p-2'>
                <p> <span className='font-semibold'> {item.name} </span> </p>
                <p> {(item.to && isPast(item.to)) ? 'Studied' : 'Studying'} <span className='font-semibold'> {item.qualification} </span></p>
                {isPast(item.to) && <p> Graduated on: <span className='font-semibold'> {format(item.to, 'MMM y')} </span></p>}
            </section>
        </section>
    ));

    return (
        <section>
            <h3 className='font-semibold text-md text-gray'> Education </h3>
            <h3 className='font-semibold text-2xl'>
                Add courses or certifications you have acquired previously.
            </h3>
            <p className='text-md mb-4'> 
                Adding your qualifications often increase chances of you getting hired.
            </p>

            {education.length === 0
                ? (
                    <section
                        onClick={() => setModal(true)}
                        role='button'
                        tabIndex={0}
                        onKeyPress={() => setModal(true)}
                        className='flex justify-center border-2 border-dashed border-gray hover:bg-gray hover:cursor-pointer py-10 px-5'
                    >
                        <section className='flex flex-col justify-center items-center'>
                            <FiPlus className='text-4xl font-extrabold' />
                            <h2 className='font-extrabold mt-3 text-md'> Add school or course </h2>
                            <p className='text-center'> Show clients the courses or certifications you have under your belt. </p>
                        </section>
                    </section>
            )
                : listOfQualifications}

                {education.length && (
                    <button
                        type='button' 
                        onClick={() => setModal(true)}
                        className='w-full my-2 hover:opacity-80 px-4 py-2 text-white bg-slate hover:cursor-pointer'
                    > 
                    Add More
                </button>
                )}

            {modal && (
                <Modal>
                    <section className='p-3'>
                        <h3 className='font-semibold text-md text-black text-center'> Add Qualification </h3>
                        <FormLabel
                            type='text'
                            name='school.qualification'
                            labelName='Qualification Name'
                            placeholder='Diploma in Business Administration'
                            register={register}
                            required='This field is required.'
                            errorMessage={errors?.qualification?.message?.toString()}
                        />
                        <FormLabel
                            type='text'
                            name='school.name'
                            labelName='School Name'
                            placeholder='Durban University of Technology'
                            register={register}
                            required='This field is required.'
                            errorMessage={errors?.name?.message?.toString()}
                        />
                        <DatePicker
                            labelName='Started'
                            name='school.from'
                            register={register}
                            required={true}
                        />
                        <DatePicker
                            labelName='Graduated'
                            name='school.to'
                            register={register}
                            required={true}
                        />
                        <section className='flex mb-3 items-center gap-3'>
                            <input type='checkbox' value='studying' id='stillAtSchool' name='school.studying' />
                            <label htmlFor='stillAtSchool'> I am still studying here </label>
                        </section>

                        <section className='flex gap-2'>
                            <Button
                                type='button'
                                buttonText='Cancel'
                                className='flex-1 hover:opacity-80 px-4 py-2 text-black border border-gray bg-none hover:cursor-pointer'
                                handleClick={() => setModal(false)}
                            />
                            <Button 
                                type='button'
                                buttonText='Add'
                                className='flex-1 hover:opacity-80 px-4 py-2 text-white bg-slate hover:cursor-pointer'
                                handleClick={handleEducation}
                            />
                        </section>
                    </section>
                </Modal>
            )}

            <section> {component} </section>
        </section>
    );
};
