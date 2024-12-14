import React, { useContext } from 'react';
import { MyContext } from './App';

function ComponentOne() {
    const { setData } = useContext(MyContext);

    return (
        <div>
            <h2>Component One</h2>
            <button
            onClick={() => setData('Data updated from ComponentOne!')}>Update Data</button>
        </div>
    )
}

export default ComponentOne;

