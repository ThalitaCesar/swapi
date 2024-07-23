import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import axios from 'axios';

const InputSearch: React.FC<{ onSearch: (results: any[]) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`);
      onSearch(response.data.results);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  return (
    <div className="bg-secondary text-[13px] bg-opacity-50 mt-[30px] flex justify-items-center justify-center items-center w-full h-full p-[7px] px-[20px] rounded-full">
      <input
        className="w-full bg-transparent px-4 py-2 rounded-full outline-none"
        placeholder="Pesquisar Personagem..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <GoSearch size='25px' className="hover:text-primary cursor-pointer" onClick={handleSearch} />
    </div>
  );
};

export default InputSearch;

