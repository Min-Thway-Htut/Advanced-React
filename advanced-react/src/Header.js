import React, {useContext} from 'react';
import { ThemeContext } from './App';

function Header(){
    const {theme} = useContext(ThemeContext);

    return(
        <h2>
            The current theme is: <strong>{theme}</strong>
        </h2>
    )
}

export default Header;