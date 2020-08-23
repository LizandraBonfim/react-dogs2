import React, { SyntheticEvent, ImgHTMLAttributes, HTMLAttributes } from 'react';

import { Container, Img, Skeleton } from './styles';
import Constants from '../Constants';

interface ImagePros {
    
    name: string;
    src: string

}


const Image: React.FC<ImagePros> = ({ name, src, ...props }) => {

    const fullSrc = `${Constants.URL_BASE}${src}`;    

    function handleLoad({ target }: any ) {
        target.style.opacity = 1;
    }

    console.log('Container', Container.styledComponentId);
    console.log('skeleton', Skeleton.styledComponentId);


    return <Container>
        <Skeleton ></Skeleton>
        <Img src={fullSrc} onLoad={handleLoad} alt={name} {...props} />
    </Container>
}

export default Image;  