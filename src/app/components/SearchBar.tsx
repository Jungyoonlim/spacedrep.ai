import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a topic..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 placeholder-gray-500 text-gray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"
        />
        <button
          type="submit"
          className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-800"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
