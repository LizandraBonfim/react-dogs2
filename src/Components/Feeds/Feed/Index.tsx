import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { ModalFeedPhoto, ModalFeedContext } from "../FeedContext/Index";
import { Usuario } from "../../../models/Index";
import { UserContext } from "../../UserContext/Index";
import useFeed from "../../../Hooks/useFeed";
import FeedPhotos from "../FeedPhotos/Index";



interface FeedProps {
  usuarioId?: string;
}

const Feed: React.FC<FeedProps> = ({ usuarioId }) => {

  

  const { photoModal, setUserModalId } = useContext(ModalFeedContext);
  const [openModal, setOpenModal] = useState(false);
  const { buscarFeed, loading, erro, feeds, mensagem, sucesso } = useFeed(usuarioId);



  // Quando a foto for atribuida, a modal deve ser aberta
  useEffect(() => {

    if (photoModal) setOpenModal(true);
    else setOpenModal(false);

  }, [photoModal]);

  useEffect(() => {

    async function listarFeeds() {

      console.log('buscando feed', usuarioId)
      await buscarFeed(undefined);

    }

    listarFeeds();


  }, [usuarioId, buscarFeed]);

  if (erro) return null;

  return (
    <Container>
      <ModalFeedPhoto>
        {openModal && <p>Modal foi aberta</p>}

        {feeds && feeds.map((usuario, index) => (

          <FeedPhotos key={index} usuario={usuario} />

        ))}
        
      </ModalFeedPhoto>
    </Container>
  );
};

export default Feed;
