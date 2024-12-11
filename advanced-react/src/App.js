import React from 'react';
import { ImageProvider } from './ImageContext';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  return(
    <ImageProvider>
      <div>
        <h1>React Context API Demo</h1>
        <Component1 />
        <Component2 />
      </div>
    </ImageProvider>
  )
}

export default App;