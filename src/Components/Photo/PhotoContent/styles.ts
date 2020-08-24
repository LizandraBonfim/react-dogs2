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


const Details = styled.div``;

const Author= styled.p``;

const Attributes = styled.ul``;


export { 
    PhotoContainer, 
    SinglePhotoContainer, 
    Img, 
    Details, 
    Author, 
    Attributes 
}