import React, {useEffect} from 'react';

import {
  PhotoContainer,
  SinglePhotoContainer,
  Img,
  Details,
  Views,
  Author,
  Attributes
} from './styles';

import { Foto } from '../../../models/Index';
import Image from '../../../Shared/Image/Index';
import { Link } from 'react-router-dom';
import { Titulo } from '../../../global';
import PhotoComments from '../PhotoComments/Index';
import usePhoto from "../../../Hooks/usePhoto";



interface PhotoContentPropos {
  photo: Foto,
  single: boolean
}



const PhotoContent: React.FC<PhotoContentPropos> = ({ photo, single }) => {

  const { addQtyAccess } = usePhoto();

  const Container = single ? SinglePhotoContainer : PhotoContainer;

  useEffect(() => {

    async function addQty() {

      await addQtyAccess(photo.id);

    }

    const promisse = addQty();

  }, [])

  return (
    <Container>
      <Img>
        <Image src={photo.src} name={photo.nome} />
      </Img>

      <Details>
        <div>
          <Author>
            <Link to={`/perfil/${photo.autor}`} >@{photo.autor} </Link>

            <Views>{photo.qtdAcessos}</Views>
          </Author>
          <Titulo>
            <Link to={`/foto/${photo.id}`} >{photo.nome}</Link>
          </Titulo>

          <Attributes>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} Anos</li>
          </Attributes>

        </div>

        <PhotoComments photoId={photo.id} single={true} />

      </Details>



    </Container>
  );

}

export default PhotoContent;
