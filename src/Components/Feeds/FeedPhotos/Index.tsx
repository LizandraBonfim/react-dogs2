import React from 'react';

import { Container } from './styles';
import { Usuario } from '../../../models/Index';
import FeedPhotoItem from '../FeedPhotoItem/Index';
import { AnimeLeft } from '../../../global';

interface FeedPhotosProps {
  usuario: Usuario
}

const FeedPhotos: React.FC<FeedPhotosProps> = ({ usuario }) => {

  


  if (!usuario) return null;

  return (
    <AnimeLeft>
      <Container>
        {usuario.fotos.map(foto => (<FeedPhotoItem key={foto.id} photo={foto} />))}
      </Container>
    </AnimeLeft>
  )
}

export default FeedPhotos;