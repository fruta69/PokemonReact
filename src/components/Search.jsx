import React, { useState } from "react";
import './Search.css';

const Search = ({ onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };
    return (
        <input className="input-search"
            type="search"
            placeholder="Buscar..."
            onChange={handleInputChange}
        />
    );
};
export default Search;