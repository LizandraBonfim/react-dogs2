import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';

import {Container} from '../../global';

import Head from '../../Shared/Head';
import UserHeader from "./UserHeader/Index";
import Feed from "../Feeds/Feed/Index";
import {UserContext} from "../UserContext/Index";
import NotFound from "../NotFound/Index";
import UserPhotoPost from './UserPhotoPost/Index';


const User: React.FC = () => {

  const { user } = useContext(UserContext);

  return (
    <Container>
      <Head title="Minha conta" description="Painel contendo minhas informações"/>
      <UserHeader/>
      <Routes>
        <Route path="/" element={<Feed usuarioId={ user?.id } />}/>
        <Route path="postar" element={<UserPhotoPost /> }  />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </Container>
  )
};

export default User;
