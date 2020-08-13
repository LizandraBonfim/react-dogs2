import React from "react";

import { Container } from "../../global";
import { Root } from "./styles";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

const Header: React.FC = () => {
  const logado = false;

  return (
    <Root>
      <Container>        
        <nav>          
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
          
          {!!!logado && (
            <Link className="login" to="/login">
              Login / Criar
            </Link>
          )}

          {logado && (
            <Link className="login" to="/conta">
              Werter
            </Link>
          )}
        </nav>
      </Container>
    </Root>
  );
};

export default Header;
