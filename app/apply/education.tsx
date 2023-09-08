import { format } from 'date-fns';
import React, { useState } from 'react';
import { FieldErrors, FieldValues, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../components/atoms/button';
import { FormLabel } from '../../components/molecules/formLabel';
import { Modal } from '../../components/organisms/modal';

interface EProps {
    register: Function;
    component: React.ReactNode;
    errors: FieldErrors<FieldValues>;
}

export const Education = ({ register, component, errors }: EProps) => {
    const [modal, setModal] = useState(false);
    const { getValues } = useForm();

    const handleAddEducation = () => {
        console.log('Education: ', getValues());
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(format(new Date(e.target.value), 'd MMM yyy'));
    };

    return (
        <section>
            <h3 className='font-semibold text-md text-gray'> Education </h3>
            <h3 className='font-semibold text-2xl'>
                Add courses or certifications you have acquired previously.
            </h3>
            <p className='text-md mb-4'> 
                Adding your qualifications often increase chances of you getting hired.
            </p>

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

            {modal && (
                <Modal>
                    <section className='p-3'>
                        <h3 className='font-semibold text-md text-black text-center'> Add Qualification </h3>
                        <FormLabel
                            type='text'
                            name='qualificationName'
                            labelName='Qualification Name'
                            placeholder='Diploma in Business Administration'
                            register={register}
                            required={false}
                            errorMessage={errors?.qualificationName?.message?.toString()}
                        />
                        <FormLabel
                            type='text'
                            name='schoolName'
                            labelName='College or University'
                            placeholder='Durban University of Technology'
                            register={register}
                            required={true}
                            errorMessage={errors?.schoolName?.message?.toString()}
                        />

                        <section>
                            <p> From: </p>
                            <input type="date" className='mb-4 w-full border border-gray outline-none p-2' onChange={handleDateChange} />
                        </section>
                        <section>
                            <p> Graduated: </p>
                            <input type="date" className='mb-4 w-full border border-gray outline-none p-2' onChange={handleDateChange} />
                        </section>
                        <section className='pb-4 flex items-center gap-2'>
                            <input type='checkbox' id='stillAtSchool' />
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
                                handleClick={handleAddEducation}
                            />
                        </section>
                    </section>
                </Modal>
            )}

            <section> {component} </section>
        </section>
    );
};
