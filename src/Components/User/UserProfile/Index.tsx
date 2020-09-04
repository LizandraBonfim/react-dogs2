import React, {useState} from 'react';
import {MainContainer, Titulo} from "../../../global";
import Head from "../../../Shared/Head";
import {useParams} from "react-router-dom";
import Feed from "../../Feeds/Feed/Index";
import {ModalFeedPhoto} from "../../Feeds/FeedContext/Index";


const UserProfile: React.FC = () => {

  const {user} = useParams();
  const [userId, setUserId] = useState();


  return (
    <MainContainer>
      <Head title={user} description="Pagina pessoal"/>
      <Titulo>{user}</Titulo>
      <ModalFeedPhoto>
        <Feed userName={user}/>
      </ModalFeedPhoto>
    </MainContainer>
  )

}

export default UserProfile;
