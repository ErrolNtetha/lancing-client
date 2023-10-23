import Link from 'next/link';
import React from 'react';
// import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebaseConfig';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useProfileStore } from '../../../hooks/useGlobalStore';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '../../../@/components/ui/button';

const loginSchema = z.object({
    username: z.string().email({ message: 'Your email is invalid.' }),
    password: z.string().min(6, { message: 'Your password must be 6 characters long.' })
});

export const LoginForm = () => {
    const [hidden, setHidden] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });
    const showIcon = watch('password');
    const router = useRouter();
    const addUser = useProfileStore((state: any) => state.addProfile);

    const handleLogin = async (data: any) => {
        const { username, password } = data;

        if (!(username && password)) {
            return;
        }

        setLoading(true);
        setErrorMessage(null);

        try {
            const { user } = await signInWithEmailAndPassword(auth, username, password);
            const docRef = doc(db, 'users', user.uid);

            if (user) {
                const snapShot = await getDoc(docRef);
                if (snapShot.exists()) {
                    addUser(snapShot.data())
                } else {
                    setErrorMessage('Something went wrong logging you in.');
                    return;
                }

                // redirect user to the /feed page
                router.push('/feed');
            }
        } catch (error: any) {
            console.log(error);
            switch (error.code) {
                case 'auth/user-not-found':
                    setErrorMessage('Email or password incorrect.');
                    break;

                case 'auth/wrong-password':
                    setErrorMessage('Email or password incorrect.');
                    break;

                default:
                    setErrorMessage('Something went wrong. Please try again later.');
                    break;
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='flex justify-center items-center h-[95vh]'>
            <section className='w-[20rem] md:w-[23rem]'>
                <form onSubmit={handleSubmit(handleLogin)} className='text-xs md:text-sm shadow-2xl w-full p-6'>
                    <section className='pb-4'>
                        <h1 className='pt-2 text-xl font-extrabold'> Welcome to Duello </h1>
                        <h5 className='inline text-[gray] font-bold'> New here? </h5> <Link href='/register' className='font-bold text-[green]'> Create Account </Link>
                    </section>
                    <FormLabel
                        type='text'
                        placeholder='Enter username'
                        labelName='Username'
                        name='username'
                        register={register}
                        required={true}
                        errorMessage={errors?.username && errors?.username?.message?.toString()}
                    />
                    <FormLabel
                        type={hidden ? 'password' : 'text'}
                        placeholder='Enter password'
                        labelName='Password'
                        name='password'
                        hasHideIcon={false}
                        handleHideIcon={() => setHidden(!hidden)}
                        isHidden={hidden}
                        register={register}
                        required={true}
                        errorMessage={errors?.password && errors?.password?.message?.toString()}
                        inputHasValue={showIcon ? true : false}
                    />
                    <Button
                        className={`${loading ? 'bg-gray hover:cursor-not-allowed' : 'bg-primary'} px-3 py-2 mt-3 w-full hover:opacity-80`}
                        onClick={handleLogin}
                    > 
                        {`${loading ? 'Logging in...' : 'Login'}`}
                    </Button>
                    {errorMessage && <p className='text-sm mt-4 text-[red]'> {errorMessage} </p>}
                    <section className='pt-4 text-xs md:text-sm'>
                        <p className='pb-2'> Forgot your password? <Link href='reset' className='underline'> Reset here. </Link> </p>
                    </section>
                </form>
            </section>
        </section>
    );
};
