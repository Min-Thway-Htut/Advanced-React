import React, {useContext} from 'react';
import { ThemeContext } from './App';

function ThemeToggle(){
    const {toggleTheme} = useContext(ThemeContext);

    return(
        <button
        onClick={toggleTheme}
        style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '20px',
        }}>
            Toggle Theme
        </button>
    )
}

export default ThemeToggle;