import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    //Using mapping function to render list of images
    const images = props.images.map(image => {
        /* we assign key to root element that we are returning 
        from a list of records */
        return <ImageCard key={image.id} image={image} />
    })
    //Inline "image-list" className for CSS Grid
    return <div className ="image-list"> {images} </div>
}

export default ImageList;