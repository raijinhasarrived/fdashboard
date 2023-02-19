import { useState, useEffect, createContext } from 'react';

import { Layout } from './layout/Layout';

interface ThemeContextType {
  theme?: string;
  toggleTheme: () => void;
}

const defaultValue: ThemeContextType = { theme: 'dark', toggleTheme: () => {} };

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  );
};
