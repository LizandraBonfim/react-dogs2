import React, { MouseEvent, useContext, useEffect } from "react";

import { Container } from "./styles";
import { ModalFeedContext } from "../FeedContext/Index";
import useComments from "../../../Hooks/useComments";
import Error from '../../../Shared/Error';
import Loading from "../../../Shared/Loading/Index";
import PhotoContent from "../../Photo/PhotoContent/Index";


const Modal: React.FC = () => {

    const { setPhotoModal, photoModal } = useContext(ModalFeedContext);

    function handleOutsideClick(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | undefined) {

        if (event?.target === event?.currentTarget) {
            setPhotoModal(undefined);
        }

    }


    return (
        <Container onClick={handleOutsideClick}>            
            { (photoModal)  && <PhotoContent photo={photoModal} single={false}  /> }
            
        </Container>
    )
};

export default Modal;
