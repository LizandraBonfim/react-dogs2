import React from "react";

import { MainContainer } from "../../global";
import Head from "../../Shared/Head";
import Feed from "../Feeds/Feed/Index";
import { ModalFeedPhoto } from "../Feeds/FeedContext/Index";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Head
        title="Feed"
        description="Home do site Dogs, com feed de fotos."
      />
      <ModalFeedPhoto>
        <Feed />
      </ModalFeedPhoto>

    </MainContainer>
  );
};

export default Home;
