import React, {
    createContext,
    useState
} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

    const [ pageTitle, setPageTitle ] = useState(`Cam's Site`);
    const [ themeName, setThemeName ] = useState('light');


    const themes = {
        light: { 
            syntax: '#555', 
            ui: '#ddd', 
            bg: '#eee'
        },
        dark: { 
            syntax: '#ddd', 
            ui: '#333', 
            bg: '#555' 
        },
    }

    // initialize single data object to pass in context
    const contextData = {
        page: {
            pageTitle,
            setPageTitle,
        },
        theme: {
            themeName,
            setThemeName,
        }
    }

    return (
        <ThemeContext.Provider value={ contextData }>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;