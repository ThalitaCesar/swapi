import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-text font-semibold h-[60px] text-sm px-[22px] rounded-full border-0 
                 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
    >
      {text}
    </button>
  );
};

export default Button;
