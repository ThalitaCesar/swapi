import React from 'react';
import Button from '../../../../components/Button/Button';

interface CardItemCharacterProps {
  character: any;
  index: number;
  onCharacterClick: (character: any) => void; 
}

const CardItemCharacter: React.FC<CardItemCharacterProps> = ({ character, onCharacterClick }) => {
  const handleButtonClick = () => {
    onCharacterClick(character); 
  };

  return (
    <div className="bg-white bg-opacity-20 m-[20px] flex flex-col justify-center items-center w-[200px] h-full p-[22px] rounded-[20px]">
      <p>Imagem</p>
      <p className="text-[14px] font-semibold my-2 text-center">{character.name}</p>
      <Button text="Saiba mais" onClick={handleButtonClick} />
    </div>
  );
};

export default CardItemCharacter;
