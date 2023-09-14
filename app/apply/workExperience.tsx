import { format, formatDistance, isPast } from 'date-fns';
import React, { useState } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../components/atoms/button';
import { DatePicker } from '../../components/molecules/datePicker';
import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';
import { Modal } from '../../components/organisms/modal';
import { useExperienceStore } from '../../hooks/useGlobalStore';

interface PortfolioProps {
    register: Function;
    component: React.ReactNode;
    errors: any;
    getValues: any;
    watch: any;
}

export const WorkExperience = ({ register, watch, component, errors, getValues }: PortfolioProps) => {
    const [modal, setModal] = useState(false);
    const { addExperience, experience } = useExperienceStore();
    const isWorking = watch('work.isWorking');
    console.log(watch('work.isWorking'));

    const handleAddExperience = () => {
        const { work } = getValues();
        console.log(work);
        addExperience(work);
        setModal(false);
    };

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
            <h3 className='font-semibold text-md text-gray'> Work Experience </h3>
            <h3 className='font-semibold text-2xl'>
                Okay. If applicable, please add your work experience.
            </h3>
            <p className='text-md mb-4'> 
                Profiles with relevant work experience are <span className='font-semibold text-[green]'>15x</span> more likely to get hired.
            </p>

            {experience.length === 0
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
                            <h2 className='font-extrabold mt-3 text-md'> Add Work Experience </h2>
                            <p className='text-center'> Show clients your work experience to boost your chances. </p>
                        </section>
                    </section>
                )
                : listOfExperience}

                {experience.length && (
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
                        <h3 className='font-semibold text-lg text-black text-center'> Add Experience </h3>
                        <FormLabel
                            type='text'
                            name='work.companyName'
                            labelName='Company Name'
                            placeholder='Company name you worked for'
                            register={register}
                            required={true}
                            errorMessage={errors?.work?.companyName?.message?.toString()}
                        />
                        <FormLabel
                            type='text'
                            name='work.position'
                            labelName='Job Position'
                            placeholder='Senior Software Engineer'
                            register={register}
                            required={false}
                            errorMessage={errors?.work?.position?.message?.toString()}
                        />
                        <TextareaLabel
                            name='work.description'
                            labelName='Description'
                            placeholder='Write a description explaining about this project.'
                            register={register}
                            required={true}
                            errorMessage={errors?.work?.description?.message?.toString()}
                        />
                        <DatePicker 
                            name='work.from'
                            labelName='From'
                            required={true}
                            register={register}
                            errorMessage={errors?.work?.from?.message?.toString()}
                        />
                        <DatePicker 
                            name='work.to'
                            labelName='To'
                            disabled={isWorking}
                            required={true}
                            register={register}
                            errorMessage={errors?.work?.to?.message?.toString()}
                        />
                        <section className='flex items-center gap-3 my-3'>
                            <input type='checkbox' id='isWorking' {...register('work.isWorking')} />
                            <label htmlFor='isWorking'> I am currently working here </label>
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
                                handleClick={handleAddExperience}
                            />
                        </section>
                    </section>
                </Modal>
            )}

            <section> {component} </section>
        </section>
    );
};
