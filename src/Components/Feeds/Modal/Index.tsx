import React, { MouseEvent, useContext, useEffect } from "react";

import { Container } from "./styles";
import { ModalFeedContext } from "../FeedContext/Index";
import useComments from "../../../Hooks/useComments";
import Error from '../../../Shared/Error';
import Loading from "../../../Shared/Loading/Index";
import PhotoContent from "../../Photo/PhotoContent/Index";


const Modal: React.FC = () => {

    const { setPhotoModal, photoModal } = useContext(ModalFeedContext);

    const { comments, erro, listCommentsThePhoto, loading, mensagem } = useComments();

    useEffect(() => {


        async function loadComments() {

            if (!photoModal?.id)
                return;

            await listCommentsThePhoto(photoModal.id);

            console.log('modal aberta', photoModal);
        }

        loadComments();


    }, []);





    function handleOutsideClick(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | undefined) {

        if (event?.target === event?.currentTarget) {
            setPhotoModal(undefined);
        }

    }


    return (
        <Container onClick={handleOutsideClick}>
            { erro && <Error error={erro}  />}   
            { loading && <Loading  /> }         
            { (photoModal)  && <PhotoContent photo={photoModal} single={true}  /> }
            
        </Container>
    )
};

export default Modal;
