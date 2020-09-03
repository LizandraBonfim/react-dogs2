import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import {Container} from './styles';
import {Titulo} from "../../../global";
import UserHeaderNav from "../UserHeaderNav/Index";

const UserHeader: React.FC = () => {

  const [title, setTitle] = useState<string>("");
  const {pathname} = useLocation();


  const urls: {[index: string]:string} = {
    "/conta/estatistica": "Estatistica",
    "/conta/postar": "Poste Sua Foto"
  };

  useEffect(() => {

    const titulo = urls[pathname.toLowerCase()] ?? "Minha Conta";
    setTitle(titulo);

  }, [pathname, urls]);

  return (
    <Container>
      <Titulo>{title}</Titulo>
      <UserHeaderNav />
    </Container>
  )
}

export default UserHeader;
