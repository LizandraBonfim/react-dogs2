import React, { useContext } from "react";

import { Container } from "../../global";
import { Root } from "./styles";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../UserContext/Index";

const Header: React.FC = () => {

  const { usuario } = useContext(UserContext);

  console.log('usuairo', usuario)
  

  return (
    <Root>
      <Container>        
        <nav>          
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>
          
          {!!!usuario && (
            <Link className="login" to="/login">
              Login / Criar
            </Link>
          )}

          {usuario && (
            <Link className="login" to="/conta">
              {usuario.nomeDeUsuario}
            </Link>
          )}
        </nav>
      </Container>
    </Root>
  );
};

export default Header;
