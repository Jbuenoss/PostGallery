import './Button.css';

export const Button = ({ onClick, disabled, text }) => (
    <button className="button-black"
        onClick={onClick}
        disabled={disabled}>
        {text}
    </button>
);