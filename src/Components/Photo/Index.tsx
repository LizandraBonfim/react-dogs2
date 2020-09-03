import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import usePhoto from "../../Hooks/usePhoto";
import Loading from "../../Shared/Loading/Index";

import {MainContainer} from "../../global";
import Head from "../../Shared/Head";
import PhotoContent from "./PhotoContent/Index";

const Photo: React.FC = () => {

  const {id} = useParams();
  const {getPhoto, sucesso, loading, erro, photo} = usePhoto();

  useEffect(() => {

    async function request() {
      await getPhoto(id);
    }

    const promise = request();

  }, [getPhoto, id]);


  if (loading) return <Loading/>
  //TODO: Criar pagina de erro

  if (photo) return (
    <MainContainer>
      <Head title={photo.nome} description="Pagina do animal de estimação"/>
      <PhotoContent photo={photo} single={true}/>
    </MainContainer>
  );

  return null;

}

export default Photo;
