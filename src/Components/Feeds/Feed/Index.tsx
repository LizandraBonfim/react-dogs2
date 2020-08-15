import React, { useContext, useEffect, useState } from "react";

import { Container } from "./styles";
import { ModalFeedPhoto, PhotoContext } from "../FeedContext/Index";
import { efetuarLogin } from "../../../services/Index";
import { Usuario } from "../../../models/Index";

interface FeedProps {
	usuarioId?: string;
}




const Feed: React.FC<FeedProps> = ({ usuarioId }) => {
	const { photo, setUserId } = useContext(PhotoContext);

	const [openModal, setOpenModal] = useState(false);
	const [fakeFeed, setFakeFeed] = useState<Usuario[] | null>([]);

	useEffect(() => {
		if (usuarioId) setUserId(usuarioId);
	}, [usuarioId, setUserId]);

	// Quando a foto for atribuida, a modal deve ser aberta
	useEffect(() => {
		if (!!photo) setOpenModal(true);
		else setOpenModal(false);
	}, [photo]);

	
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
