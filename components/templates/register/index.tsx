import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/button';
import { Navigation } from '../../organisms/navigation';
import { ProjectsPortfolio, PersonalDetails, AccountType } from '../../organisms/register';

export const Registration = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [firstPage, setFirstPage] = useState<boolean | null>(true);
    const [lastPage, setLastPage] = useState(false);
    const { register, watch, handleSubmit, getValues } = useForm();
    const showIcon = watch('password');
 
    const handleNext = () => {
        if (currentPage !== (forms.length - 1)) {
            setCurrentPage((prevState) => prevState + 1);
            setLastPage(false);
        } else if (currentPage === (forms.length - 1)) {
            setLastPage(true);
            return null;
        }
    };

    const handlePrev = () => {
        if (currentPage !== 0) {
            setCurrentPage((prevState) => prevState - 1);
            setFirstPage(false);
            setLastPage(false);
        } else if (currentPage === 0) {
            setCurrentPage(0);
            setFirstPage(true);
            return null;
        } 
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const buttonText = `${lastPage ? 'Create New Account' : 'Proceed'}`;
    const handleClick = lastPage ? onSubmit : handleNext;

    const navButton = (
        <section className='flex items-center justify-between'> 
            <section />
            <section className='flex items-center gap-2'>
                {firstPage && (currentPage === 0)
                    ? null 
                    : (
                    <Button
                        buttonText='Back'
                        handleClick={() => handlePrev()}
                        className='border border-gray hover:opacity-80 px-4 py-2 text-black'
                    />
                )}
                <Button
                    buttonText={buttonText}
                    handleClick={() => handleClick}
                    className='bg-slate hover:opacity-80 px-4 py-2 text-white'
                />
            </section>
        </section>
    );

    const forms = [
        <AccountType 
            key={2}
            component={navButton}
            register={register}
            account={getValues('accountType')}
            watch={watch('accountType')}
        />,
        <PersonalDetails 
            key={0} 
            register={register} 
            component={navButton} 
            watch={watch('password')}
        />, 
        <ProjectsPortfolio 
            key={1}
            register={register}
            component={navButton}
        />
    ];


    useEffect(() => {
        if (currentPage === forms.length - 1) {
            setLastPage(true);
        } else if (currentPage === 0) {
            setLastPage(false);
            setFirstPage(true);
        }
        else {
            setFirstPage(true);
        }
    }, [currentPage, forms.length]);

    
    return (
        <React.Fragment> 
            <h4 className='pt-8 text-white text-center font-extrabold'> {`Step ${currentPage + 1} of ${forms.length}`} </h4>
            <section className='flex justify-around gap-8 px-6 pt-2 bg-cover bg-hero-bg'>
                <Navigation handleSwitch={() => setCurrentPage(1)} />
                <section className='py-4'>
                    <form onSubmit={handleSubmit(handleClick)} className='shadow-2xl text-xs sm:text-sm bg-white h-max w-[20] md:w-[25rem] px-6 py-6'>
                        {forms[currentPage]}
                    </form>
                    <section className='text-white text-center text-sm m-4'>
                        <p> Already have an account? <span className='underline'> <Link href='/login'> Login </Link> </span></p> 
                    </section>
                </section>
                <section className='hidden' />
            </section>
        </React.Fragment>
    );
};
