import styled, {css} from "styled-components";
import {AnimeLeftStyle} from "../../../global";

const Container = styled.section`

  ${AnimeLeftStyle};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(max-width: 40rem) {
    grid-template-columns: 1fr;
  }


  .VictoryContainer {
    height: initial !important;
  }

`;


const GraphItem = styled.div`

  box-shadow: 0 10px 20px rgba(0, 0, 0 0.1);
  border-radius: 0.2rem;
  display: grid;
  align-items: center;
  margin-bottom: 2rem;


`;

const HeaderGraph = styled(GraphItem)`

  grid-column: 1/3;
  padding: 2rem;
  font-size: 2rem;

  @media(max-width: 40rem) {
    grid-column: 1;
  }

`;


export {Container, GraphItem, HeaderGraph}
