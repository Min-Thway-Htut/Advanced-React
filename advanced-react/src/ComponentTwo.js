import React, {useContext} from 'react';
import {MyContext} from './App';

function ComponentTwo(){
    const {data} =useContext(MyContext);

    return(
        <div>
            <h2>Component Two</h2>
            <p>Data from Context: {data}</p>
        </div>
    )
}

export default ComponentTwo;