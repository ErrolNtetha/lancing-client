import Link from 'next/link';
import React, { useState } from 'react';
import { FormLabel } from '../../molecules/formLabel';
import { RProps } from './projectsPortfolio';

interface IProps extends RProps {
    initialState: any;
    onChange: React.ChangeEventHandler
}

export const PersonalDetails = ({ component, initialState, onChange }: IProps) => {
    const [hidden, setHidden] = useState(true);

    return (
        <React.Fragment>
                    <h4 className='divide-gray font-bold mb-4 text-center'> Personal Details </h4>
                    <FormLabel
                        type='text'
                        value={initialState.firstName}
                        placeholder='Njabulo Wiseman'
                        labelName='First Name'
                        name='firstName'
                        htmlFor='firstName'
                        onChange={onChange}
                    />
                    <FormLabel
                        type='text'
                        value={initialState.lastName}
                        placeholder='Ndlovu'
                        labelName='Last Name'
                        name='lastName'
                        htmlFor='lastName'
                        onChange={onChange}
                    />
                    <FormLabel
                        type='email'
                        value={initialState.email}
                        placeholder='username@example.com'
                        labelName='Email'
                        name='email'
                        htmlFor='email'
                        onChange={onChange}
                    />
                    <FormLabel
                        type='text'
                        value={initialState.address}
                        placeholder='935 Mitchelle Street, Durban 4001'
                        labelName='Address'
                        name='address'
                        htmlFor='address'
                        onChange={onChange}
                    />
                    <FormLabel
                        type={hidden ? 'password' : 'text'}
                        value={initialState.password}
                        placeholder='Minimum of 6 characters'
                        labelName='Create New Password'
                        name='password'
                        htmlFor='password'
                        onChange={onChange}
                        handleHideIcon={() => setHidden(!hidden)}
                        hasHideIcon={true}
                        isHidden={hidden}
                    />
                    <section className='mt-4 block'>
                        {component}
                    </section>
                    <span className='block pt-4 text-[.8rem] text-center'> 
                        <p> By creating an account, you agree to our <span className='underline'> <Link href='#'> Terms and Conditions</Link></span>.</p>
                    </span>
        </React.Fragment>
    );
};
