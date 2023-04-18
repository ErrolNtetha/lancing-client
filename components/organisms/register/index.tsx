import Link from 'next/link';
import React, { useReducer } from 'react';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';

const REG_ACTION = {
    FIRSTNAME: 'firstName',
    LASTNAME: 'lastName',
    EMAIL: 'email',
    ADDRESS: 'address',
    PASSWORD: 'password',
    HIDE: 'hide',
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

        default:
            new Error();
    }
}

export const RegisterForm = () => {
    const [state, dispatch] = useReducer(reducer, {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        password: '',
        hidden: false,
    });

    const handleSubmit = () => {
        console.log(state);
        dispatch({ type: REG_ACTION.FIRSTNAME, payload: '' });
        dispatch({ type: REG_ACTION.LASTNAME, payload: '' });
        dispatch({ type: REG_ACTION.EMAIL, payload: '' });
        dispatch({ type: REG_ACTION.ADDRESS, payload: '' });
        dispatch({ type: REG_ACTION.PASSWORD, payload: '' });
    };

    return (
        <section className='flex justify-center px-6 pt-8 bg-cover bg-hero-bg h-[95vh]'>
            <section className='py-4'>
                <section className='shadow-2xl text-sm bg-white h-max w-[23rem] px-6 py-6'>
                    <h4 className='divide-gray font-bold mb-4 text-center'> Create New Account </h4>
                    <FormLabel
                        type='text'
                        value={state.firstName}
                        placeholder='Njabulo Wiseman'
                        labelName='First Name'
                        name='firstName'
                        htmlFor='firstName'
                        onChange={(e) => dispatch({ type: REG_ACTION.FIRSTNAME, payload: e.target.value })}
                    />
                    <FormLabel
                        type='text'
                        value={state.lastName}
                        placeholder='Ndlovu'
                        labelName='Last Name'
                        name='lastName'
                        htmlFor='lastName'
                        onChange={(e) => dispatch({ type: REG_ACTION.LASTNAME, payload: e.target.value })}
                    />
                    <FormLabel
                        type='email'
                        value={state.email}
                        placeholder='username@example.com'
                        labelName='Email'
                        name='email'
                        htmlFor='email'
                        onChange={(e) => dispatch({ type: REG_ACTION.EMAIL, payload: e.target.value })}
                    />
                    <FormLabel
                        type='text'
                        value={state.address}
                        placeholder='935 Mitchelle Street, Durban 4001'
                        labelName='Address'
                        name='address'
                        htmlFor='address'
                        onChange={(e) => dispatch({ type: REG_ACTION.ADDRESS, payload: e.target.value })}
                    />
                    <FormLabel
                        type={state.hidden ? 'password' : 'text'}
                        value={state.password}
                        placeholder='Minimum of 6 characters'
                        labelName='Create New Password'
                        name='password'
                        htmlFor='password'
                        onChange={(e) => dispatch({ type: REG_ACTION.PASSWORD, payload: e.target.value })}
                        handleHideIcon={() => dispatch({ type: REG_ACTION.HIDE })}
                        hasHideIcon={true}
                        isHidden={state.hidden}
                    />
                    <section className='mt-4'>
                        <Button
                            buttonText='Create Account'
                            handleClick={handleSubmit}
                            className='bg-slate block w-full hover:opacity-80 px-4 py-2 text-white'
                        />
                    </section>
                    <span className='block pt-4 text-[.8rem] text-center'> 
                        <p> By creating an account, you agree to our <span className='underline'> <Link href='#'> Terms and Conditions</Link></span>.</p>
                    </span>
                </section>
                <section className='text-white-p text-center m-4'>
                    <p> Aleady have an account? <span className='underline'> <Link href='/login'> Login </Link> </span></p> 
                </section>
            </section>
        </section>
    );
};
