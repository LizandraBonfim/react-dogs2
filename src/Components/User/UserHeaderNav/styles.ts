import styled, {css} from "styled-components";

type Props = {
  isActive: boolean;
}


const NavDesktop = styled.nav`

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a, button {
    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }



  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #eee;
    outline: none;
  }

  .active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;

    & svg > * {
      fill: #fb1;
    }
  }
  // Não faz nada, isso é uma dependencia do componente NavMobile
  ${(props: Props) => props.isActive && null};

`;

const navMobileIsActive = css`
  transition: 0.3s;
  transform: initial;
  opacity: 1;
  pointer-events: initial;
  z-index: 100;
`;

const NavMobile = styled.nav`

  display: block;
  position: absolute;
  top: 70px;
  right: 0;
  padding: 0 1rem;
  background: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  transform: translateX(-10px);
  opacity: 0;
  pointer-events: none;

  a, button {

    display: flex;
    align-items: center;
    background: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  a:hover svg > *,
  button:hover svg > * {
    fill: #fb1;
  }

  button {
    border-bottom: none;
  }

  svg {
    margin-right: 0.5rem;
  }

  ${(props: Props) => props.isActive && navMobileIsActive}

`;

const MobileButtonStyle = css`

  outline: none;
  background: white;
  box-shadow: 0 0 0 3px #fea;
  border-color: #fb1;
  color: #fb1;

`;

const activeButtonStyle = css`

    ::after {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 9 -8px currentColor;
    }
`;

const ButtonMobile = styled.button`

    background: #eee;
    border-radius: 0.2rem;
    height: 40px;
    width: 40px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;

    ::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: 0.2s;
    }


    :hover {
      ${MobileButtonStyle};
    }

    ${(props: Props) => props.isActive && activeButtonStyle}
    ${(props: Props) => props.isActive && MobileButtonStyle}


`;

export {NavDesktop, NavMobile, ButtonMobile}
