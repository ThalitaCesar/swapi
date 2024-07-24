import {jwtDecode} from 'jwt-decode';

interface LoginResponse {
  token: string;
}

export const login = async (username: string, password: string): Promise<string | null> => {
  try {
    const fakeUserId = Math.floor(Math.random() * 1000) + 1;
    const token = generateFakeToken(fakeUserId, username);
    localStorage.setItem('jwtToken', token);
    return token;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('jwtToken');
};

export const isLoggedIn = (): boolean => {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token) as { exp: number };
    if (Date.now() >= exp * 1000) {
      console.log('Token expirado');
      logout();
      return false;
    }
    return true;
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return false;
  }
};

const generateFakeToken = (userId: number, username: string): string => {
  const payload = {
    id: userId,
    username,
    exp: Math.floor(Date.now() / 1000) + 3600, 
  };
  return `fake_jwt_token.${btoa(JSON.stringify(payload))}.signature`;
};
