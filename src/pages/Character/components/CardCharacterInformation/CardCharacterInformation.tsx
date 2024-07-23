import React, { useEffect, useState } from 'react';
import './CardCharacterInformation.scss';
import bgImage from '../../../../assets/bg3.jpg';
import axios from 'axios';

interface CardCharacterInformationProps {
  character: any;
}

const CardCharacterInformation: React.FC<CardCharacterInformationProps> = ({ character }) => {
  const [films, setFilms] = useState<string[]>([]);
  const [speciesName, setSpeciesName] = useState<string>('');
  const [starshipsNames, setStarshipsNames] = useState<string[]>([]);
  const [homeworldName, setHomeworldName] = useState<string>('');

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const promises = character.films.map(async (filmUrl: string) => {
          const response = await axios.get(filmUrl);
          return response.data.title;
        });
        const filmsData = await Promise.all(promises);
        setFilms(filmsData);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    const fetchSpecies = async () => {
      try {
        if (character.species.length === 0) {
          setSpeciesName('Não especificado');
        } else {
          const response = await axios.get(character.species[0]);
          if (response.data && response.data.name) {
            setSpeciesName(response.data.name);
          } else {
            setSpeciesName('Desconhecido');
          }
        }
      } catch (error) {
        console.error('Error fetching species:', error);
        setSpeciesName('Erro ao carregar espécie');
      }
    };

    const fetchStarships = async () => {
      try {
        if (character.starships.length === 0) {
          setStarshipsNames(['Nenhuma nave registrada']);
          return;
        }

        const promises = character.starships.map(async (starshipUrl: string) => {
          const response = await axios.get(starshipUrl);
          return response.data.name;
        });
        const starshipsData = await Promise.all(promises);
        setStarshipsNames(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    const fetchHomeworld = async () => {
      try {
        const response = await axios.get(character.homeworld);
        setHomeworldName(response.data.name);
      } catch (error) {
        console.error('Error fetching homeworld:', error);
      }
    };

    fetchFilms();
    fetchSpecies();
    fetchStarships();
    fetchHomeworld();
  }, [character]);

  return (
    <div className="card-container">
      <div className="card-character">
        <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="gradient"></div>
        <div className="content">
          <h1 className="text-xl font-bold mb-4">{character.name}</h1>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Filmes:</p>
              <p>{films.join(', ')}</p>
            </div>
            <div>
              <p className="font-semibold">Espécie:</p>
              <p>{speciesName}</p>
            </div>
            <div>
              <p className="font-semibold">Altura:</p>
              <p>{character.height}</p>
            </div>
            <div>
              <p className="font-semibold">Naves:</p>
              <p>{starshipsNames.join(', ')}</p>
            </div>
            <div>
              <p className="font-semibold">Armas:</p>
              <p></p>
            </div>
            <div>
              <p className="font-semibold">Planeta:</p>
              <p>{homeworldName}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="secondary-cards">
        <div className="card-left">
          <div className="background-image-left" style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div className="gradient-left"></div>
        </div>
        <div className="card-right">
          <div className="background-image-right" style={{ backgroundImage: `url(${bgImage})` }}></div>
          <div className="gradient-right"></div>
        </div>
      </div>
    </div>
  );
};

export default CardCharacterInformation;
