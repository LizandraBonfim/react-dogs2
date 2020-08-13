import React from 'react';
import { MainContainer, Titulo } from '../../global';


const NotFound: React.FC = () => {
  return <MainContainer>
      <Titulo>Erro: 404</Titulo>
      <p>Página não encontrada</p>
  </MainContainer>
}

export default NotFound;