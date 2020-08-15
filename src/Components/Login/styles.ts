import styled from 'styled-components';

const Container = styled.section`

    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    &::before {
        display: block;
        content: '';
        background: url('https://images.unsplash.com/photo-1585510542657-7f8b228c95fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80') no-repeat center center;
        background-size: cover;
    }    

    @media (max-width: 40rem){
        grid-template-columns: 1fr;

        &::before {
            display: none;
        }
    }
  
`;

const Forms = styled.div`

    max-width: 30rem;
    padding: 1rem;
    margin-top: 20vh;

    @media(max-width: 40rem) {

        max-width: 100%;

    }

`;



export { Container, Forms }