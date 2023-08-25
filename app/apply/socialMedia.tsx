import React from 'react';
import { FormLabel } from '../../components/molecules/formLabel';

interface SProps {
    register: Function;
    component: React.ReactNode;
}

export const SocialMedia = ({ register, component }: SProps) => {
    return (
        <section>
            <h3 className='font-semibold text-md text-gray'> Social Media Profiles </h3>
            <h3 className='font-semibold text-2xl'>
                Great job! We are getting closer. 
                Now paste your social media links...
            </h3>
            <p className='text-md'> 
                Sometimes clients might want to see your social media profiles.
            </p>
            <p className='inline my-2 text-md hover:cursor-pointer border-b-2 border-dashed border-t-0 border-x-0 border-b-gray'> How can i find my links? </p>
            <FormLabel
                type='url'
                name='facebook'
                labelName='Facebook'
                placeholder='E.g.:https://www.facebook.com/profile.php?id=12345'
                register={register}
                required={true}
            />
            <FormLabel
                type='url'
                name='twitter'
                labelName='Twitter'
                placeholder='E.g.:https://www.twitter.com/username'
                register={register}
                required={false}
            />
            <FormLabel
                type='url'
                name='linkedin'
                labelName='LinkedIn'
                placeholder='E.g.:https://www.linkedin.com/in/username'
                register={register}
                required={false}
            />
            <section> {component} </section>
        </section>
    );
};
