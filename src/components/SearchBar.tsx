import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/productsSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full border-2 border-gray-300 rounded-lg p-2 text-gray-700 shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-200"
        onChange={handleSearch}
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBar;
