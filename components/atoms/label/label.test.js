import { render, screen } from '@testing-library/react';
import { Label } from '.';
import '@testing-library/jest-dom';

describe('Label', () => {
    it('renders a label', () => {
        render(<Label labelName='Name' htmlFor='name' />);

        const label = screen.getByText('Name');
        expect(label).toBeVisible();
    });
});
