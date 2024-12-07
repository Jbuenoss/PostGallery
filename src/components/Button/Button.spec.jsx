import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button.jsx'
import userEvent from '@testing-library/user-event';

describe('<Button/>', () => {

    it('Should render the button with the text Load more', () => {
        render(<Button text="Load more"/>);
        expect.assertions(2);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveAttribute('class', 'button-black');
    });

    it('Should call function on button click', async () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });

        // user-event introduces small delays when triggering events
        await userEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('Should be disabled when disabled is true', async () => {
        render(<Button text="Load more" disabled={true} />);

        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeDisabled();
    });

    it('Should be enabled when disabled is false', async () => {
        render(<Button text="Load more" disabled={false} />);

        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeEnabled();
    });

    it('Should match the snapshot', async () => {
        const {container} = render(<Button text="Load more" disabled={false} />);
        expect(container.firstChild).toMatchSnapshot();
    });

});