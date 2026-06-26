import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, pass: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('auth', String(isAuthenticated));
  }, [isAuthenticated]);

  const login = (username: string, pass: string) => {
    // In Vite, environment variables exposed to the client start with VITE_
    // So we assume VITE_ADMIN_USERNAME and VITE_ADMIN_PASSWORD in .env
    const validUser = import.meta.env.VITE_ADMIN_USERNAME || 'admin123';
    const validPass = import.meta.env.VITE_ADMIN_PASSWORD || 'pass123';

    if (username === validUser && pass === validPass) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
