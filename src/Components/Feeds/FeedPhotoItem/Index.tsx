import React, { useContext } from 'react';

import { Container, Views } from './styles';

import Image from '../../../Shared/Image/Index';
import { Foto } from '../../../models/Index';
import { ModalFeedContext } from '../FeedContext/Index';


interface FeedPhotoItemProps {

  photo: Foto

}

const FeedPhotoItem: React.FC<FeedPhotoItemProps> = ({ photo }) => {

  const { setPhotoModal } = useContext(ModalFeedContext);

  function handleClick() {
    setPhotoModal(photo);
  }
  

  return (
    <Container onClick={handleClick} >
      <Image name={photo.nome} src={photo.src} />
      <Views>{photo.qtdAcessos}</Views>
    </Container>
  )
}

export default FeedPhotoItem;   