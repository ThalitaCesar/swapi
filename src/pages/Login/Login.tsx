import React, { useState } from 'react';
import './Login.scss';
import bgImage from '../../assets/bg6.jpg';
import Button from '../../components/Button/Button';
import { login } from '../../services/authService'; 
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      if (token) {
        localStorage.setItem('jwtToken', token);
        setIsAuthenticated(true); 
        navigate('/search');
      } else {
        console.error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="background-image" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="gradient"></div>
      <div className="content-login">
        <div className="flex flex-col">
          <h1 className="text-[30px] md:text-[30px] font-semibold mb-[12px]">
            Entre no portal
          </h1>
          <p className="text-[14px] mb-[12px] w-[250px]"> Faça o login para poder ver com detalhes os personagens e naves.</p>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <input
              type="text"
              className="bg-secondary text-[13px] bg-opacity-50 mt-[30px] flex justify-items-center justify-center items-center w-[250px] p-[7px] px-[20px] rounded-full"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="bg-secondary text-[13px] bg-opacity-50 mt-[15px] flex justify-items-center justify-center items-center w-[250px] p-[7px] px-[20px] rounded-full"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="button-container">
              <Button text="Entrar" onClick={handleLogin} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
