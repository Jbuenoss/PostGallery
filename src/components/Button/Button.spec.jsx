import { render, screen } from '@testing-library/react';
import { Button } from './Button.jsx'

describe('<Button/>', () => {

    it('Should render the button with the text Load more', () => {
        render(<Button text="Load more"/>);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

});