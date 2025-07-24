// src/components/UI/SearchInput.js
import React from 'react';

/**
 * Search Input Component
 * Input field with search icon
 */
function SearchInput({ placeholder, value, onChange, className = '' }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`search-input ${className}`}>
      <span className="material-icons search-input__icon">search</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="search-input__field"
      />
    </div>
  );
}

export default SearchInput;
