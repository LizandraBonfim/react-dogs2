import React from 'react';

import { Container, Views } from './styles';

import Image from '../../../Shared/Image/Index';
import { Foto } from '../../../models/Index';


interface FeedPhotoItemProps {

    photo: Foto

}

const FeedPhotoItem: React.FC<FeedPhotoItemProps> = ( { photo } ) => {
  return <Container>
      <Image name={photo.nome} src={photo.src} />
      <Views>{photo.qtdAcessos}</Views>
  </Container>
}

export default FeedPhotoItem;   