import { render, screen } from '@testing-library/react';
import { Button } from './';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('displays a button', () => {
        render(
            <Button 
                className='buttonText'
                buttonText='Test'
            />
        );

        expect(screen.getByText('Test'));
    });
});
