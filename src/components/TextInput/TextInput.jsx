import './TextInput.css';
import P from 'prop-types';

export const TextInput = ({ handleChange, searchValue }) => (
  <input
    type="search"
    onChange={handleChange}
    value={searchValue}
    className="input-search"
    placeholder="Type your search"
  />
);

TextInput.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string.isRequired,
};
