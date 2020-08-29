import React, { useEffect } from 'react';

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
import useComments from '../../../Hooks/useComments';
import Loading from '../../../Shared/Loading/Index';

interface PhotoContentPropos {
  photo: Foto,
  single: boolean
}



const PhotoContent: React.FC<PhotoContentPropos> = ({ photo, single }) => {

  const Container = single === true ? SinglePhotoContainer : PhotoContainer;

  const { comments, erro, loading, listCommentsThePhoto } = useComments();

  useEffect(() => {

    async function loadComments() {      

      await listCommentsThePhoto(photo.id);

    }

    loadComments();

  }, [listCommentsThePhoto, photo]);



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
            <li>{photo.peso}</li>
            <li>{photo.idade}</li>
          </Attributes>

        </div>

        {loading && <Loading />}
        {comments && <PhotoComments commentsPhoto={comments} single={true} /> }

        

      </Details>



    </Container>
  );

}

export default PhotoContent;