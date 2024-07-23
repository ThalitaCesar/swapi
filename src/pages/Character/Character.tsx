import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardCharacterInformation from './components/CardCharacterInformation/CardCharacterInformation';
import bgImage from '../../assets/bg4.jpg'; 
import './Character.scss'; 
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';

const Character: React.FC = () => {
  const { state } = useLocation<{ character: any }>(); 
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); 
  };

  if (!state || !state.character) {
    return <div>Personagem não encontrado.</div>;
  }

  const { character } = state;

  console.log(character)

  return (

    <div className="character-container">
    <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
    <div className="gradient"></div>
    <div className="content">
    <Navbar/>
    <CardCharacterInformation character={character} />
    <div className="button-container">
          <Button text="Voltar" onClick={handleVoltar} />
        </div>
    </div>
  </div>
  );
};

export default Character;
