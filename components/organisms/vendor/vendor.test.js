import { render, screen } from '@testing-library/react';
import { ListVendors } from './listVendors';
import '@testing-library/jest-dom';

describe('Portfolio', () => {
    it('should view the portfolio', () => {
        render(<ListVendors />);

        const button = screen.getByText('View Portfolio')
        expect(button);
    });
});
