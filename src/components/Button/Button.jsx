import './Button.css';

export const Button = ({ onClick, disabled, text }) => (
    <button className="button-load-posts"
        onClick={onClick}
        disabled={disabled}>
        {text}
    </button>
);