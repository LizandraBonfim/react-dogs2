import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { ModalFeedPhoto, ModalFeedContext } from "../FeedContext/Index";
import useFeed from "../../../Hooks/useFeed";
import FeedPhotos from "../FeedPhotos/Index";
import Modal from "../Modal/Index";



interface FeedProps {
  userId?: string;
  userName?: string;
}

const Feed: React.FC<FeedProps> = ({ userId, userName }) => {

  const { photoModal, setUserModalId } = useContext(ModalFeedContext);
  const [openModal, setOpenModal] = useState(false);
  const { buscarFeed, loading, erro, feeds, mensagem, sucesso } = useFeed({
    userId,
    userName
  });


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

    const promise = listarFeeds();


  }, [userId, buscarFeed]);


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
