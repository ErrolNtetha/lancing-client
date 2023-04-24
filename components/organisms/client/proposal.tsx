import React, { useReducer } from 'react';
import { Button } from '../../atoms/button';
import { FormLabel } from '../../molecules/formLabel';
import { Textarea } from '../../molecules/textArea';

type ProposalProps = {
    handleModal: React.MouseEventHandler<HTMLElement>;
    recipient: {
        firstName: string;
        lastName: string;
    };
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SUBJECT':
         return { ...state, subject: action.payload }
        case 'DESCRIPTION':
         return { ...state, description: action.payload }
    }
};

export const Proposal = ({ handleModal, recipient }: ProposalProps) => {
    const [state, dispatch] = useReducer(reducer, {
        subject: '',
        description: ''
    });

    const handleProposalSubmit = () => {
        dispatch({ type: 'SUBJECT', payload: '' });
        dispatch({ type: 'DESCRIPTION', payload: '' });
        console.log(state);
    };

    return (
        <section>
            <section className='pt-3 px-3'>
                <h3 className='font-semibold text-lg sticky top-0 bg-white-p'> Send Proposal </h3>
                <p className='my-2'> To: <span className='font-bold'> {recipient.firstName} {recipient.lastName} </span> </p>
            </section>
            <section className='pb-3 px-3'>
                <FormLabel
                    labelName='Subject'
                    name='subject'
                    type='text'
                    placeholder='Type a subject'
                    htmlFor='subject'
                    value={state.subject}
                    onChange={(e) => dispatch({ type: 'SUBJECT', payload: e.target.value })}
                />
                <Textarea
                    placeholder='Type proposal message'
                    value={state.description}
                    labelName='Description'
                    htmlFor='description'
                    name='description'
                    onChange={(e) => dispatch({ type: 'DESCRIPTION', payload: e.target.value })}
                />
            </section>
            <section className='flex bg-white-p items-center gap-2 p-3 sticky bottom-0 left-0 w-full'>
                <Button
                    buttonText='Close'
                    className='border border-gray py-2 px-4 w-[50%] hover:cursor-pointer'
                    handleClick={handleModal}
                />
                <Button
                    buttonText='Submit'
                    className='bg-slate text-white py-2 px-4 w-[50%] hover:cursor-pointer'
                    handleClick={handleProposalSubmit}
                />
            </section>
        </section>
    );
};
