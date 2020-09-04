import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';

import {Container} from '../../global';

import Head from '../../Shared/Head';
import UserHeader from "./UserHeader/Index";
import Feed from "../Feeds/Feed/Index";
import {UserContext} from "../UserContext/Index";
import NotFound from "../NotFound/Index";
import UserPhotoPost from './UserPhotoPost/Index';
import UserStats from "./UserStats/Index";
import {ModalFeedPhoto} from "../Feeds/FeedContext/Index";


const User: React.FC = () => {

  const {user} = useContext(UserContext);

  return (
    <Container>
      <Head title="Minha conta" description="Painel contendo minhas informações"/>
      <UserHeader/>
      <Routes>
        <ModalFeedPhoto>
          <Route path="/" element={<Feed userId={user?.id}/>}/>
        </ModalFeedPhoto>
        <Route path="postar" element={<UserPhotoPost/>}/>
        <Route path="estatistica" element={<UserStats/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </Container>
  )
};

export default User;

