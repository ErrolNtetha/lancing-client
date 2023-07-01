import { render, screen } from '@testing-library/react';
import { Button } from './';
import '@testing-library/jest-dom';

describe('Button', () => {
    it('renders the button', () => {
        render(
            <Button 
                className='buttonText'
                buttonText='Test'
            />
        );

        const button = screen.getByText('Test')
        expect(button);
    });
});
