import React from "react";

import { Container } from "./styles";

import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer: React.FC = () => {
  return (
    <Container>      
      <p>Dogs, Alguns direitos reservados</p>
      <Dogs />
    </Container>
  );
};

export default Footer;
