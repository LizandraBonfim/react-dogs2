import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';

import {Container} from '../../global';

import Head from '../../Shared/Head';
import UserHeader from "./UserHeader/Indext";
import Feed from "../Feeds/Feed/Index";
import {UserContext} from "../UserContext/Index";


const User: React.FC = () => {

  const { usuario } = useContext(UserContext);

  return (
    <Container>
      <Head title="Minha conta" description="Painel contendo minhas informações"/>
      <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed usuarioId={ usuario?.id } />}/>
      </Routes>

    </Container>
  )
};

export default User;
