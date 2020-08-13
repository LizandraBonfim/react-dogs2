import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { ModalFeedPhoto, PhotoContext } from "../FeedContext/Index";

interface FeedProps {
  usuarioId?: string;
}

export interface Usuario {
  id: string;
  nome: string;
  fotos: Foto[];
}

export interface Foto {
  id: string;
  nome: string;
  idade: number;
  peso: number;
  src: string;
  comentarios: Comentario[];
}

export interface Comentario {
  id: string;
  nomeDeUsuario: string;
  dataHora: Date;
  texto: string;
}

const Feed: React.FC<FeedProps> = ({ usuarioId }) => {
  const { photo, setUserId } = useContext(PhotoContext);

  const [openModal, setOpenModal] = useState(false);
  const [fakeFeed, setFakeFeed] = useState<Usuario[] | null>([]);

  useEffect(() => {
    setUserId(usuarioId);
  }, [usuarioId]);

  // Quando a foto for atribuida, a modal deve ser aberta
  useEffect(() => {
    if (!!photo) setOpenModal(true);
    else setOpenModal(false);
  }, [photo]);

  useEffect(() => {
    async function buscarDadosFake() {
      const response = await fetch("http://localhost:3333/feed");
      const feed = await response.json();

      setFakeFeed(feed);

      console.log("feed", feed);
    }

    buscarDadosFake();
  }, []);

  return (
    <Container>
      <ModalFeedPhoto>
        {openModal && <p>Modal foi aberta</p>}

        {fakeFeed && fakeFeed.map((x, index) => <p key={index}> {x.nome} </p>)}

        <p>lista de feed fotos (ul) fica aqui</p>
      </ModalFeedPhoto>
    </Container>
  );
};

export default Feed;
