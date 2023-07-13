import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Button } from '../../atoms/button';
import { Navigation } from '../../organisms/navigation';
import { ProjectsPortfolio, PersonalDetails } from '../../organisms/register';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebaseConfig';

export const Registration = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [firstPage, setFirstPage] = useState<boolean | null>(true);
    const [lastPage, setLastPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<null | string>(null);
    const { register, watch, handleSubmit } = useForm();
    const router = useRouter();
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

    const onSubmit = async (data: any) => {
        const { 
            email,
            password,
            firstName,
            lastName
        } = data; 

        setLoading(true);
        setErrorMessage(null);

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            const clientsRef = doc(db, 'clients', user.uid);

            if (user && auth.currentUser) {
                await updateProfile(auth.currentUser, { displayName: `${firstName} ${lastName}`});
                await setDoc(clientsRef, {
                    email: user.email,
                    emailVerified: user.emailVerified,
                    photoURL: user.photoURL,
                    name: {
                        firstName,
                        lastName
                    }
                });
            }
            router.push('/feed');

        } catch (error: any) {
            switch(error.code) {
                case 'auth/email-already-in-use':
                    setErrorMessage('This email has already been used. Try a different email.');
                    break;

                default:
                    setErrorMessage('An error occured while trying to register your account.');
            }

        } finally {
            setLoading(false);
        }
    };

    const renderLoading = loading ? 'Creating account...' : 'Create New Account';
    const buttonText = `${lastPage ? renderLoading : 'Proceed'}`;
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
                    disabled= {loading ? true : false}
                    className={`hover:opacity-80 px-4 py-2 text-white ${loading ? 'bg-gray hover:cursor-not-allowed' : 'bg-slate hover:cursor-pointer'}`}
                />
            </section>
        </section>
    );

    const forms = [
        <PersonalDetails
            key={0} 
            register={register} 
            component={navButton} 
            watch={showIcon}
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
                        {errorMessage && <section className=' text-center text-[red] py-4 flex justify-center mt-4'>
                            <p> {errorMessage} </p>
                        </section>}
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
