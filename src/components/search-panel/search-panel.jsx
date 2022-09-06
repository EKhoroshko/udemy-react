import React from 'react';
import './search-panel.css';

const SearchPanel = ({ onSearchEmploeer }) => {
  const handleChange = (e) => {
    onSearchEmploeer(e.currentTarget.value);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      onChange={handleChange}
    />
  )
}

export default SearchPanel;