import styled from 'styled-components';

const Comments = styled.ul`

    overflow-y: auto;
    word-break: break-word;
    padding: 0 2rem;
  
`;

const CommentSigle = styled(Comments)`

    padding: 0px;

`;

const Comment = styled.li`

    margin-bottom: 0.5rem;
    line-height: 1.2;

`;


export { Comments, CommentSigle, Comment }