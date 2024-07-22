
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xl font-bold">Swapi</p>

        <div className="hidden md:flex space-x-6">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Our history</NavLink>
          <NavLink href="#">Services</NavLink>
        </div>


        <div className="md:hidden">
         {/* <img src={menuIcon} alt="Menu" className="cursor-pointer" />*/}
       <p>menu</p>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink href="#">Login</NavLink>
          <NavLink href="#">Register</NavLink>
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
