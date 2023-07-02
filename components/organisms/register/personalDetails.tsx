import Link from 'next/link';
import React, { useState } from 'react';
import { FormLabel, FormLabelProps } from '../../molecules/formLabel';

interface IProps extends FormLabelProps {
    register: Function;
    component: React.ReactNode;
}

export const PersonalDetails = ({ component, register }: IProps) => {
    const [hidden, setHidden] = useState(true);

    return (
        <React.Fragment>
            <h4 className='divide-gray font-bold mb-4 text-center'> Personal Details </h4>
                <FormLabel
                    type='text'
                    placeholder='Njabulo Wiseman'
                    labelName='First Name'
                    name='firstName'
                    register={register}
                    required={true}
                />
                <FormLabel
                    type='text'
                    placeholder='Ndlovu'
                    labelName='Last Name'
                    name='lastName'
                    register={register}
                    required={true}
                />
                <FormLabel
                    type='email'
                    placeholder='username@example.com'
                    labelName='Email'
                    name='email'
                    register={register}
                    required={true}
                />
                <FormLabel
                    type='text'
                    placeholder='935 Mitchelle Street, Durban 4001'
                    labelName='Address'
                    name='address'
                    register={register}
                    required={true}
                />
                <FormLabel
                    type={hidden ? 'password' : 'text'}
                    placeholder='Minimum of 6 characters'
                    labelName='Create New Password'
                    name='password'
                    register={register}
                    required={true}
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