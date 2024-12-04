import './TextInput.css'
export const TextInput = ({ handleChange, searchValue }) => (
    <input type="search"
        onChange={handleChange}
        value={searchValue}
        className="input-search" />
);
