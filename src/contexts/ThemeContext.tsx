import React, { createContext, useState, useEffect } from 'react';

console.log('ThemeContext loaded');

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
  console.log('isDark:', isDark);
  if (isDark) {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  } else {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  }
  console.log('html class:', document.documentElement.className);
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
