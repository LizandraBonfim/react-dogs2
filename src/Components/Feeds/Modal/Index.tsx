import React, { MouseEvent, useContext } from "react";

import { Container } from "./styles";
import { ModalFeedContext } from "../FeedContext/Index";

const Modal: React.FC = () => {

    const { setPhotoModal } = useContext(ModalFeedContext);

    
    function handleOutsideClick(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | undefined) {        
        
        console.log('clicou');

        if (event?.target === event?.currentTarget){
            setPhotoModal(undefined);
        }

        
    }


  return <Container onClick={handleOutsideClick}>

  </Container>;
};

export default Modal;
