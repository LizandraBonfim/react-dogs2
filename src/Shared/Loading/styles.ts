import styled from 'styled-components';

const Container = styled.div`

    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    top: 0;
    left: 0;
    z-index: 1000;
    background: rgba(172, 172, 172, 0.5);


`;

const Load = styled.div`

  margin: auto;
  width: 80px;
  height: 80px;
  display: flex;
  padding-left: 5px;

  justify-content: center;
  align-items: center;
  border-radius: 50%;

`;



export { Container, Load }
