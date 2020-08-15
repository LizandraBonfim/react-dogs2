import React from "react";

import { MainContainer } from "../../global";
import Head from "../../Shared/Head";
import Feed from "../Feeds/Feed/Index";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <Head 
          title="Fotos"
          description="Home do site Dogs, com feed de fotos."
      />        
      <Feed />
      
    </MainContainer>
  );
};

export default Home;
