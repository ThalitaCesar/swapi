import React from 'react';
import Button from '../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Description: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/search'); 
    };
  
    return (
      <div className="flex flex-column justify-center items-center">
  
        <div className="max-w-[500px] m-[20px] mt-[30%] md:mt-[10%] xl:mt-[12%] md:ml-[-23%]">
          <h1 className="text-[30px] md:text-[30px] font-semibold mb-[12px]">
            Embarque em uma Odisséia Interestelar em uma Galáxia Muito, Muito Distante
          </h1>
          <p className="text-[14px] mb-[12px]">
            Bem-vindo a uma galáxia de possibilidades ilimitadas, onde as estrelas são os seus pontos de referência e a aventura não tem limites. Clique no botão abaixo para buscar seu personagem.
          </p>
          <Button text="Iniciar Pesquisa de Personagem" onClick={handleButtonClick} />
        </div>
  
      </div>
    );
  };
  
  export default Description;