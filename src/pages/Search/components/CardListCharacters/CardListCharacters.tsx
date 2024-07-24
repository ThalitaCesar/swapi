import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardItemCharacter from '../CardItemCharacter/CardItemCharacter';
import Pagination from '../../../../components/Pagination/Pagination';
import InputSearch from '../InputSearch/InputSearch';
import { useNavigate } from 'react-router-dom';

const CardListCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalItems, setTotalItems] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacters();
  }, [currentPage]);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
      setCharacters(response.data.results);
      setTotalItems(response.data.count);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchResults = (results: any[]) => {
    setCharacters(results);
    setTotalItems(results.length);
  };

  const handleCharacterClick = (character: any) => {
    // Verificar se o usuário está autenticado antes de redirecionar
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      navigate(`/character`, { state: { character } });
    } else {
      navigate('/login'); // Redirecionar para a página de login se não estiver autenticado
    }
  };

  return (
    <div className="bg-secondary bg-opacity-20 mt-[30px] flex flex-col justify-center items-center w-full h-full p-[22px] rounded-[20px]">
      <InputSearch onSearch={handleSearchResults} />

      <div className="mt-[30px] flex flex-wrap justify-center items-center w-full h-full">
        {characters.map((character, index) => (
          <CardItemCharacter
            key={index}
            character={character}
            index={index}
            onCharacterClick={handleCharacterClick}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalItems / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CardListCharacters;
