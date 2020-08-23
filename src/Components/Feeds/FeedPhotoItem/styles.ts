import styled from 'styled-components';



const Views = styled.span`

    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    grid-area: 1/1;
    align-items: center;
    justify-content: center;
    display: none;

    ::before {
        content: '';
        width: 16px;
        height: 10px;
        display: inline-block;
        margin-right: 0.25rem;
        background: url('../../../Assets/visualizacao.svg') no-repeat;
    }

`;




const Container = styled.li`    

    &:nth-child(2) {
        grid-column: 2 / 4;
        grid-row: span 2;
    }

    @media (max-width: 40rem) {
        &:nth-child(2) {
            grid-column: initial;
            grid-row: initial;
        }
    }


    display: grid;
    border-radius: 0.2rem;
    overflow: hidden;
    cursor: pointer;

    & > div {
        
        grid-area: 1/1;

    }
    

    &:hover() ${Views} {

        background-color: blue;

    }
    

`;


export { Container, Views }