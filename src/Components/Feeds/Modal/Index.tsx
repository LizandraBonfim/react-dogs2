import React, { MouseEvent, useContext } from "react";

import { Container } from "./styles";
import { PhotoContext } from "../FeedContext/Index";

const Modal: React.FC = () => {

    const { setPhoto } = useContext(PhotoContext);

    
    function handleOutsideClick(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent> | undefined) {        
        
        console.log('clicou');

        if (event?.target === event?.currentTarget){
            setPhoto(undefined);
        }

        
    }


  return <Container onClick={handleOutsideClick}>

  </Container>;
};

export default Modal;
