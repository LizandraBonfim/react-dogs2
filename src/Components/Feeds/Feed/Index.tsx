import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { ModalFeedPhoto, ModalFeedContext } from "../FeedContext/Index";
import { Usuario } from "../../../models/Index";
import { UserContext } from "../../UserContext/Index";
import useFeed from "../../../Hooks/useFeed";
import FeedPhotos from "../FeedPhotos/Index";
import Modal from "../Modal/Index";



interface FeedProps {
  usuarioId?: string;
}

const Feed: React.FC<FeedProps> = ({ usuarioId }) => {



  const { photoModal, setUserModalId } = useContext(ModalFeedContext);
  const [openModal, setOpenModal] = useState(false);
  const { buscarFeed, loading, erro, feeds, mensagem, sucesso } = useFeed(usuarioId);



  // Quando a foto for atribuida, a modal deve ser aberta
  useEffect(() => {

    console.log('modal', photoModal)
    if (photoModal) setOpenModal(true);
    else setOpenModal(false);

  }, [photoModal]);
  
  useEffect(() => {

    async function listarFeeds() {

      await buscarFeed(undefined);

    }

    listarFeeds();


  }, [usuarioId, buscarFeed]);

  if (erro) return null;

  return (
    <Container>

      {openModal &&  <Modal  /> }

      {feeds && feeds.map((usuario, index) => (

        <FeedPhotos key={index} usuario={usuario} />

      ))}


    </Container>
  );
};

export default Feed;
