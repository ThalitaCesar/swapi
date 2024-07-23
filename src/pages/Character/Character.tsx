import React from 'react';
import { useLocation } from 'react-router-dom';

const Character: React.FC = () => {
  const { state } = useLocation<{ character: any }>(); 

  if (!state || !state.character) {
    return <div>Personagem não encontrado.</div>;
  }

  const { character } = state;

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Homeworld: {character.homeworld}</p>
    </div>
  );
};

export default Character;
