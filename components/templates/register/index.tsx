import Link from 'next/link';
import React, { useEffect, useReducer, useState } from 'react';
import { Button } from '../../atoms/button';
import { Navigation } from '../../organisms/navigation';
import { ProjectsPortfolio, PersonalDetails, WorkExperience } from '../../organisms/register';

export const Registration = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [firstPage, setFirstPage] = useState<boolean | null>(true);
    const [lastPage, setLastPage] = useState(false);

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
    }, [currentPage]);

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

    /**
     *
     * Reducer
     *
     */

    const REG_ACTION = {
        FIRSTNAME: 'firstName',
        LASTNAME: 'lastName',
        EMAIL: 'email',
        ADDRESS: 'address',
        PASSWORD: 'password',
        HIDE: 'hide',
        COMPANY_NAME: 'companyName',
        NUM_OF_YEARS: 'numOfYears',
        JOB_TITLE: 'jobTitle',
        TITLE: 'title',
        DURATION: 'duration',
        DESCRIPTION: 'description'

    }

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case REG_ACTION.FIRSTNAME:
                return { ...state, firstName: action.payload }
            case REG_ACTION.LASTNAME:
                return { ...state, lastName: action.payload }
            case REG_ACTION.EMAIL:
                return { ...state, email: action.payload }
            case REG_ACTION.ADDRESS:
                return { ...state, address: action.payload }
            case REG_ACTION.PASSWORD:
                return { ...state, password: action.payload }
            case REG_ACTION.HIDE:
                return { ...state, hidden: !state.hidden }
            case REG_ACTION.COMPANY_NAME:
                return { ...state, companyName: action.payload }
            case REG_ACTION.NUM_OF_YEARS:
                return { ...state, numOfYears: action.payload }
            case REG_ACTION.JOB_TITLE:
                return { ...state, jobTitle: action.payload }
            case REG_ACTION.DURATION:
                return { ...state, duration: action.payload }
            case REG_ACTION.TITLE:
                return { ...state, title: action.payload }
            case REG_ACTION.DESCRIPTION:
                return { ...state, description: action.payload }

            default:
                new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        companyName: '',
        numOfYears: '',
        jobTitle: '',
        title: '',
        duration: '',
        description: ''
    });

    const handleSubmit = () => {
        console.log(state);
    };

    const buttonText = `${lastPage ? 'Create New Account' : 'Proceed'}`;
    const handleClick = lastPage ? handleSubmit : handleNext;

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
                    handleClick={() => handleClick()}
                    className='bg-slate hover:opacity-80 px-4 py-2 text-white'
                />
            </section>
        </section>
    );

    const forms = [
        <PersonalDetails key={0} initialState={state} onChange={(e) => dispatch({ type: e.target.name, payload: e.target.value })} component={navButton} />,
        <ProjectsPortfolio key={1} initialState={state} onChange={(e) => dispatch({ type: e.target.name, payload: e.target.value })} component={navButton} />,
        <WorkExperience key={2} initialState={state} onChange={(e) => dispatch({ type: e.target.name, payload: e.target.value })} component={navButton} />
    ];
    
    return (
        <React.Fragment> 
            <h4 className='pt-8 text-white text-center font-extrabold'> {`Step ${currentPage + 1} of ${forms.length}`} </h4>
            <section className='flex justify-around gap-8 px-6 pt-2 bg-cover bg-hero-bg'>
                <Navigation handleSwitch={() => setCurrentPage(1)} />
                <section className='py-4'>
                    <section className='shadow-2xl text-xs sm:text-sm bg-white h-max w-[20] md:w-[25rem] px-6 py-6'>
                        {forms[currentPage]}
                    </section>
                    <section className='text-white text-center text-sm m-4'>
                        <p> Aleady have an account? <span className='underline'> <Link href='/login'> Login </Link> </span></p> 
                    </section>
                </section>
                <section className='hidden' />
            </section>
        </React.Fragment>
    );
};
