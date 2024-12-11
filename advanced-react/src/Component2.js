import React, { useContext } from 'react';
import { ImageContext } from './ImageContext';

const Component2 = () => {
    const { setSelectedImage } = useContext(ImageContext);

    return (
        <div>
            <h3>Select an Image</h3>
            <div>
              <img 
              src='https://images.app.goo.gl/iB4nt18sZLvmQRhm9'
              alt='Image 1'
              onClick={() => setSelectedImage('./pic1.png')}/>
            </div>
        </div>
    );
};

export default Component2;