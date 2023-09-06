import { format } from 'date-fns';
import React, { useState } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../components/atoms/button';
import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';
import { Modal } from '../../components/organisms/modal';

interface PortfolioProps {
    register: Function;
    component: React.ReactNode;
    errors: FieldErrors<FieldValues>;
}

export const WorkExperience = ({ register, component, errors }: PortfolioProps) => {
    const [modal, setModal] = useState(false);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(format(new Date(e.target.value), 'd MMM yyy'));
    };

    return (
        <section>
            <h3 className='font-semibold text-md text-gray'> Work Experience </h3>
            <h3 className='font-semibold text-2xl'>
                Okay. If applicable, please add your work experience.
            </h3>
            <p className='text-md mb-4'> 
                Profiles with work relevant experience are <span className='font-semibold text-[green]'>15x</span> likely to get hired.
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
                    <h2 className='font-extrabold mt-3 text-md'> Add Work Experience </h2>
                    <p className='text-center'> Show clients your work experience to boost your chances. </p>
                </section>
            </section>

            {modal && (
                <Modal>
                    <section className='p-3'>
                        <h3 className='font-semibold text-lg text-black text-center'> Add Experience </h3>
                        <FormLabel
                            type='text'
                            name='workTitle'
                            labelName='Title'
                            placeholder='Product Package Design'
                            register={register}
                            required={true}
                            errorMessage={errors?.portfolioTitle?.message?.toString()}
                        />
                        <TextareaLabel
                            name='workDescription'
                            labelName='Description'
                            placeholder='Write a description explaining about this project.'
                            register={register}
                            required={true}
                        />
                        <FormLabel
                            type='url'
                            name='projectUrl'
                            labelName='Website (optional)'
                            placeholder='Website of this project...'
                            register={register}
                            required={false}
                        />
                        <section>
                            <p> From: </p>
                            <input type="date" className='mb-4 w-full border border-gray outline-none p-2' onChange={handleDateChange} />
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
                            />
                        </section>
                    </section>
                </Modal>
            )}

            <section> {component} </section>
        </section>
    );
};
