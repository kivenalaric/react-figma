import { createContext, useContext } from 'react';

const themeContext = createContext();

export const ThemeProvider = themeContext.Provider;
export const ThemeConsumer = themeContext.Consumer;

export const themeObject = {
  dark: {
    color: 'white',
    background: 'rgba(0, 0, 0, 0.9)',
  },
  light: {
    color: 'black',
    background: 'white',
  },
};

export const useTheme = () => {
  return useContext(ThemeConsumer);
};
