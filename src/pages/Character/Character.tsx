import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardCharacterInformation from './components/CardCharacterInformation/CardCharacterInformation';
import bgImage from '../../assets/bg4.jpg';
import './Character.scss';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';

const Character: React.FC = () => {
  const { state } = useLocation<{ character: any }>();
  const navigate = useNavigate();

  const [character, setCharacter] = useState<any>(null);

  useEffect(() => {
    if (state && state.character) {
      setCharacter(state.character);
    }
  }, [state]);

  const handleVoltar = () => {
    navigate(-1);
  };

  // Verifica se o character ainda é null, então não renderiza o CardCharacterInformation
  if (!character) {
    return <div>Carregando...</div>;
  }

  console.log(character);

  return (
    <div className="character-container">
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="gradient"></div>
      <div className="content">
        <Navbar />
        {/* Verifica se character é null antes de passá-lo para o CardCharacterInformation */}
        {character && <CardCharacterInformation character={character} />}
        <div className="button-container">
          <Button text="Voltar" onClick={handleVoltar} />
        </div>
      </div>
    </div>
  );
};

export default Character;
