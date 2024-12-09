import React, {createContext, useState} from 'react';
import Header from './Header';
import ThemeToggle from './ThemeToggle';

export const ThemeContext = createContext();

function App(){
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#ffff',
        height: '100vh',
        textAlign: 'center'
      }}>
        <h1>Welcome to Theme Switcher</h1>
        <Header />
        <ThemeToggle />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;