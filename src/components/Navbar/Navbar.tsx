import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xl font-bold cursor-pointer"  onClick={handleHomeClick}>Swapi</p>

        <div className="hidden md:flex space-x-6">
          <NavLink href='/'>Inicio</NavLink>
          <NavLink href="#">Nossa História</NavLink>
          <NavLink href="#">Serviços</NavLink>
        </div>


        <div className="md:hidden">
        <NavLink href="/login">Login</NavLink>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/login">Entre</NavLink>
          <p> | </p>
          <NavLink href="#">Cadastre-se</NavLink>
        </div>
      </div>
    </nav>
  );
};


const NavLink: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-primary transition-colors duration-300"
    >
      {children}
    </a>
  );
};

export default Navbar;
