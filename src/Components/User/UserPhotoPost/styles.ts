import styled from 'styled-components';

import {AnimeLeftStyle} from "../../../global";

const Container = styled.section`

  ${AnimeLeftStyle};

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;


  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
  }

  .file {
    margin-bottom: 1rem;
  }

`;

type Props = {
  imageUrl: string
}

const Preview = styled.div`

    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
    background-image: url(${(prop: Props) => `${prop.imageUrl}` });

    ::after {
      content: '';
      display: block;
      height: 0;
      margin-bottom: 100%;
    }

`;

const UploadFile = styled.div`

  input {
    display: none;
  }

  label {
    padding: 0 1rem;
    height: 50px;
    width: 50px;
    font-size: 3rem;
    background: #fff;
    box-shadow: 0 0 0 3px #fea;
    border: 1px solid #fb1;
    color: #fb1;
    border-radius: .2rem;
    cursor: pointer;
  }

  margin-bottom: 1rem;



`;



export {Container, Preview, UploadFile}
