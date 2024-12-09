import P from 'prop-types'
import './Button.css';

export const Button = ({ onClick, disabled = false, text }) => (
    <button className="button-black"
        onClick={onClick}
        disabled={disabled}>
        {text}
    </button>
);

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool
};
