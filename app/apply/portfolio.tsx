import { format } from 'date-fns';
import React, { useState } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { Button } from '../../components/atoms/button';
import { FormLabel } from '../../components/molecules/formLabel';
import { TextareaLabel } from '../../components/molecules/textArea';
import { Modal } from '../../components/organisms/modal';
import { usePortfolioStore } from '../../hooks/useGlobalStore';
import Resizer from 'react-image-file-resizer';

interface PortfolioProps {
    register: Function;
    component: React.ReactNode;
    errors: FieldErrors<FieldValues>;
    getValues: any;
}

export const Portfolio = ({ register, component, errors, getValues }: PortfolioProps) => {
    const [modal, setModal] = useState(false);
    const { addPortfolio, portfolio } = usePortfolioStore();

    const resizeImage = (file: any) => {
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                'JPEG',
                100,
                0,
                (url) => {
                    resolve(url)
                },
                'base64'
            );
        });
    };

    const handleImageUpload = async () => {

    };

    const handleAddPortolio = () => {
        const { title, description } = getValues();
        addPortfolio({ title, description });
    };

    const listOfPortfolios = portfolio.map((item: any, index: number) => (
        <section key={index} className='my-3'>
            <section className='border border-dashed border-gray p-2'>
                <p> <span className='font-semibold'> {item.title} </span> </p>
                <p> <span className='font-semibold'> {item.description} </span> </p>
            </section>
        </section>
    ));

    return (
        <section>
            <h3 className='font-semibold text-md text-gray'> Portfolio Projects </h3>
            <h3 className='font-semibold text-2xl'>
                You&apos;re almost there. 
                Now add projects you have done in the past.
            </h3>
            <p className='text-md mb-4'> 
                Profiles with projects get <span className='font-semibold text-[green]'>10x</span> views.
                Clients need to know your skills by seeing portfolio samples of your previous work.
            </p>


            {portfolio.length === 0
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
                            <h2 className='font-extrabold mt-3 text-md'> Add Project </h2>
                            <p className='text-center'> Showcase your work by adding a project to your profile. </p>
                        </section>
                    </section>
            )
                : listOfPortfolios}

                {portfolio.length && (
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
                        <h3 className='font-semibold text-lg text-black text-center'> Add Project </h3>
                        <FormLabel
                            type='text'
                            name='title'
                            labelName='Title'
                            placeholder='Product Package Design'
                            register={register}
                            required={true}
                            errorMessage={errors?.portfolioTitle?.message?.toString()}
                        />
                        <TextareaLabel
                            name='description'
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
                                handleClick={handleAddPortolio}
                            />
                        </section>
                    </section>
                </Modal>
            )}

            <section> {component} </section>
        </section>
    );
};
