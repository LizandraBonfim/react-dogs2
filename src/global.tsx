// @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');
import styled, { createGlobalStyle, keyframes } from "styled-components";

const EstiloGlobal = createGlobalStyle`    

    *{
        box-sizing: border-box;
    }

    body {
        padding-top: 4rem;
        margin: 0px;
        color: #333;
        --type-first: Helvetica, Arial, sans-serif;
        --type-second: 'Spectral', georgia;
        font-family: var(---type-first);
    }

    h1, h2, h3, h4, p {
        margin: 0px;
    }

    ul, li {
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        display: block;
        font-size: 1rem;
        font-family: var(--type-first);
        color: #333;
    }

    a {
        text-decoration: none;
        color: #333;
    }


`;

//#region [ Animações ]

const animeLeftFrame = keyframes`
    to {
        opacity: 1;
        transform: initial;
    }
`;

const AnimeLeft = styled.div`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeftFrame} 0.3s forwards;
`;

const skeleton = keyframes`
   from{
        background-position: 0;
    }
    to{
        background-position: -200%;
    }
`;

const Carregando = styled.div`
  animation: ${skeleton} 2s infinite linear;
`;

//#endregion

const Container = styled.section`
  max-width: 50rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

const MainContainer = styled(Container)`
  margin-top: 2rem;
`;

const Title = styled.h1`
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;

    &::after {
       content: '';
       display: block;
       width: 1.5rem;
       height: 1.5rem;
       background: #fb1;
       position: absolute;
       bottom: 5px;
       left: -5px;
       border-radius: 0.2rem;
       z-index: -1;
    }

`;

const AppDogs = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 10rem);
`;

const AppBody = styled.main`
    flex: 1;
`;

export { 
    EstiloGlobal, 
    AnimeLeft, 
    Container, 
    MainContainer, 
    Carregando,
    Title as Titulo,
    AppDogs,
    AppBody
};
