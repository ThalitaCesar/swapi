import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModalStarship.scss';

interface ModalStarshipProps {
  starshipUrl: string;
  onClose: () => void;
}

const ModalStarship: React.FC<ModalStarshipProps> = ({ starshipUrl, onClose }) => {
  const [starship, setStarship] = useState<any>(null);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await axios.get(starshipUrl);
        setStarship(response.data);
      } catch (error) {
        console.error('Error fetching starship:', error);
      }
    };

    fetchStarship();
  }, [starshipUrl]);

  if (!starship) {
    return <div>Loading...</div>;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p className="text-[18px] text-bold text-[#8C1111] mt-2">{starship.name}</p>
        <p className="text-[14px] mt-10 text-[#8C1111]">Modelo: </p>
        <p className="text-[14px]">  {starship.model}</p>
        <p className="text-[14px] mt-2  text-[#8C1111]">Fabricante: </p>
        <p className="text-[14px]">  {starship.manufacturer}</p>
        <p className="text-[14px] mt-2  text-[#8C1111]">Comprimento: </p>
        <p className="text-[14px]">{starship.length}</p>
      </div>
    </div>
  );
};

export default ModalStarship;
