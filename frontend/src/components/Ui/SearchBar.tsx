import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchBarProps {
  placeholder: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, onSearch}) => {
  const [term, setTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  }

  return (
   <div className='relative flex items-center gap-3'>
      <FiSearch className='absolute left-1 top-0.8'/>
      <input 
      type="text"
      value={term}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 px-4 pl-6 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
      />
   </div>
 );
};

export default SearchBar;