import styled, { keyframes } from 'styled-components';

const ScaleUp = keyframes`

    to {
        opacity: initial;
        transform: initial;
    }

`;

const Img = styled.div`
    grid-row: 1/4;
`;


const PhotoContainer = styled.div`

    margin: auto;
    height: 36rem;
    border-radius: 0.2rem;
    background: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(0.8);
    animation: ${ScaleUp} 0.3s forwards;

`;

const SinglePhotoContainer = styled(PhotoContainer)`

    grid-template-columns: 1fr;
    height: auto;

    & > ${Img} {
        grid-row: 1;
        border-radius: 0.4rem;
        overflow: hidden;        
    }

`;


const Details = styled.div`

    padding: 2rem 2rem 0 2rem;

`;

const Author = styled.p`

    & a:hover {
        text-decoration: underline;
    }

`;

const Attributes = styled.ul``;

const Views = styled.p`

    &::before {

        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: 0.5rem;
        background: url('../../../Assets/visualizacao-black.svg');
    }

`;




export {
    PhotoContainer,
    SinglePhotoContainer,
    Img,
    Details,
    Views,
    Author,
    Attributes
}