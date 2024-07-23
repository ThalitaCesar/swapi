import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import bgImage from '../../assets/bg2.jpg';  
import './Search.scss'; 
import CardListCharacters from './components/CardListCharacters/CardListCharacters';
import InputSearch from './components/InputSearch/InputSearch';

const Search: React.FC = () => {
  return (
    <div className="search-container">
    <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
    <div className="gradient"></div>
    <div className="content">
      <Navbar/>
      <CardListCharacters/>
    </div>
  </div>
  );
};

export default Search;