import React, {createContext, useState} from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

export const MyContext = createContext();

function App () {
  const [data, setData] = useState('Hello from ComponentOne!');

  return (
    <MyContext.Provider value={{data, setData}}>
      <div>
        <h1>This is the App Component</h1>
        <ComponentOne />
        <ComponentTwo />
      </div>
    </MyContext.Provider>
  )
}

export default App;
