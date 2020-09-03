import React, { useContext } from "react";

import { Container } from "../../global";
import { Root } from "./styles";
import { Link } from "react-router-dom";

import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../UserContext/Index";

const Header: React.FC = () => {

  const { user } = useContext(UserContext);


  return (
    <Root>
      <Container>
        <nav>
          <Link to="/" aria-label="Dogs - Home">
            <Dogs />
          </Link>

          {!!!user && (
            <Link className="login" to="/login">
              Login / Criar
            </Link>
          )}

          {user && (
            <Link className="login" to="/conta">
              {user.nomeDeUsuario}
            </Link>
          )}
        </nav>
      </Container>
    </Root>
  );
};

export default Header;
