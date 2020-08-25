import React from 'react';

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

interface PhotoContentPropos {
  photo: Foto,
  single: boolean
}



const PhotoContent: React.FC<PhotoContentPropos> = ({ photo, single }) => {

  const Container = single === true ? SinglePhotoContainer : PhotoContainer;

  return (
    <Container>
      <Img>
        <Image src={photo.src} name={photo.nome} />
      </Img>      

      <Details>
        <div>
          <Author>
            <Link to={`/perfil/${photo.autor}`} >@Autor</Link>

            <Views>{photo.qtdAcessos}</Views>
            <Titulo>
              <Link to={`/foto/${photo.id}`} >{photo.nome}</Link>
            </Titulo>

            <Attributes>
              <li>{photo.peso}</li>
              <li>{photo.idade}</li>
            </Attributes>

          </Author>
        </div>


        <PhotoComments single={true} />

      </Details>



    </Container>
  );

}

export default PhotoContent;