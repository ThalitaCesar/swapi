import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import Character from '../pages/Character/Character';
import NotFound from '../pages/NotFound/NotFound';
import Login from '../pages/Login/Login';

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const jwtToken = localStorage.getItem('jwtToken');
      setIsAuthenticated(!!jwtToken);
    };
  
    checkAuth(); 
  }, [isAuthenticated]); 

  const PrivateRoute: React.FC<{ path: string; element: React.ReactNode }> = ({ path, element }) => {
    return isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        
         <Route element={<PrivateRoute />}>
          <Route path="/character" element={<Character />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
