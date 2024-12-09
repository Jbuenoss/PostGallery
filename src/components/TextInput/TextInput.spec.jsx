import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput.jsx';
import { render, screen } from '@testing-library/react';

describe('<Posts />', () => {
    it('should have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput searchValue="Testing" handleChange={fn}/>);
        
        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe('Testing');
    });

    it('should call handleChange function on each key pressed', async () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn}/>);
        
        const input = screen.getByPlaceholderText(/type your search/i);
        const value = 'the value';
        await userEvent.type(input, value);
        
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length)
    });

    it('should match snapshot', () => {
        const fn = jest.fn();
        const {container} = render(<TextInput handleChange={fn} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});