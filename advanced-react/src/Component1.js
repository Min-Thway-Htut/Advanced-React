import React, {useContext} from 'react';
import { ImageContext } from './ImageContext';

const Component1 = () => {
    const { selectedImage } = useContext(ImageContext);

    return (
        <div
        style={{
            border: '2px solid black',
            height: '300px',
            width: '300px',
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            margin: "10px auto",
            backgroundColor: "#f0f0f0",
        }}
        >
            {selectedImage ? (
                <img src={selectedImage}
                alt='Selected'
                style={{maxWidth: '100%', maxHeight: '100%'}}/>
            ) : (
                <p>No Image Selected</p>
            )}
        </div>
    );
};
export default Component1;