import React, { useState, useContext } from 'react';
import { createContext } from 'react'

const ThemeContext = createContext();


// context api
export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }
    const value = {
        theme,
        toggleTheme,
    };
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}


// custom hook to use the ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
