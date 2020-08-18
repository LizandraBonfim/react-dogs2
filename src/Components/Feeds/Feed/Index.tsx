import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { ModalFeedPhoto, ModalFeedContext } from "../FeedContext/Index";
import { Usuario } from "../../../models/Index";
import { UserContext } from "../../UserContext/Index";
import useFeed from "../../../Hooks/useFeed";

interface FeedProps {
  usuarioId?: string;
}

const Feed: React.FC<FeedProps> = ({ usuarioId }) => {

  const { photoModal, setUserModalId } = useContext(ModalFeedContext);


  const [openModal, setOpenModal] = useState(false);
  const [fakeFeed, setFakeFeed] = useState<Usuario[] | null>([]);
  const { buscarFeed, loading, erro, feeds, mensagem, sucesso } = useFeed(usuarioId);



  // Quando a foto for atribuida, a modal deve ser aberta
  useEffect(() => {

    if (photoModal) setOpenModal(true);
    else setOpenModal(false);

  }, [photoModal]);

  useEffect(() => {

    async function listarFeeds() {
      
      await buscarFeed(usuarioId);

    }

    listarFeeds();
    

  }, [usuarioId]);

  return (
    <Container>
      <ModalFeedPhoto>
        {openModal && <p>Modal foi aberta</p>}

        {fakeFeed && fakeFeed.map((x, index) => <p key={x.id}> {x.nome} </p>)}

        <p>lista de feed fotos (ul) fica aqui</p>
      </ModalFeedPhoto>
    </Container>
  );
};

export default Feed;
