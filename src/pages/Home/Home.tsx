import React from 'react';
import bgImage from '../../assets/bg.png'; 
import './Home.scss'; 
import Description from './components/Description/Description';
import Navbar from '../../components/Navbar/Navbar';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="gradient"></div>
      <div className="content">
        <Navbar/>
        <Description />
      </div>
    </div>
  );
};

export default Home;
