import React, { useContext } from 'react';
import { Theme } from './Theme';

const ThemeContext = React.createContext<Theme>({
  primaryColor: 'black',
  secondaryColor: 'black',
});

export interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
