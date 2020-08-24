import React from 'react';

import { PhotoContainer, SinglePhotoContainer, Img } from './styles';
import { Foto } from '../../../models/Index';
import Image from '../../../Shared/Image/Index';

interface PhotoContentPropos {
  photo: Foto,
  single: boolean
}

const PhotoContent: React.FC<PhotoContentPropos> = ( {photo, single} ) => {

  const Container = single ? SinglePhotoContainer : PhotoContainer;  
  
  return (
    <Container>
      <Img>
        <Image src={photo.src} name={photo.nome} />
      </Img>
    </Container>
  );

}

export default PhotoContent;