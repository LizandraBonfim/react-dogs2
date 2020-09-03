import styled, {keyframes} from 'styled-components';

const Form = styled.form`

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

`;

const SingleForm = styled(Form)`

  margin: 1rem 0;

`;

const TextArea = styled.textarea`

  display: block;
  width: 100%;
  font-size: 1rem;
  resize: none;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 0.2rem;
  background: #333;
  transition: 0.2s;

  :focus, :hover {
    outline: none;
    border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea;
  }

`;

const latirKeyframe = keyframes`

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

const BarkButton = styled.button`

  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  padding: 0 1rem;
  overflow: hidden;

  :focus svg g, :hover svg g {

    animation: ${latirKeyframe} 0.6s infinite;

  }

`;

export { Form, SingleForm, TextArea, BarkButton }
