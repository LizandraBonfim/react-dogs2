import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import {NavDesktop, NavMobile, ButtonMobile} from './styles';

import {UserContext} from "../../UserContext/Index";
import useMedia from "../../../Hooks/useMedia";

import {ReactComponent as MinhasFotos} from '../../../Assets/feed.svg';
import {ReactComponent as Estatistica} from '../../../Assets/estatisticas.svg';
import {ReactComponent as AdicionarFoto} from '../../../Assets/adicionar.svg';
import {ReactComponent as Sair} from '../../../Assets/sair.svg';


const UserHeaderNav: React.FC = () => {

  const {logout} = useContext(UserContext);


  const
    [mobileMenuIsActive, setMobileMenuIsActive] = useState<boolean>(false),
    isMobile = useMedia('(max-width: 40rem)');

  const NavContext = isMobile ? NavMobile : NavDesktop;

  useEffect(() => {

    console.log('mobileMenuIsActive', mobileMenuIsActive)

  }, [mobileMenuIsActive])


  const userLogout = () => logout();


  return (
    <>
      {isMobile && (

        <ButtonMobile
          aria-label="Menu"
          isActive={mobileMenuIsActive}
          onClick={() => setMobileMenuIsActive(!mobileMenuIsActive)}
        />

      )}

      <NavContext isActive={mobileMenuIsActive}>

        <NavLink to="/conta" end activeClassName="active">
          <MinhasFotos/>
          {isMobile && 'Minhas Fotos'}
        </NavLink>

        <NavLink to="/conta/estatistica" activeClassName="active">
          <Estatistica/>
          {isMobile && 'Estatística'}
        </NavLink>

        <NavLink to="/conta/postar"  activeClassName="active">
          <AdicionarFoto/>
          {isMobile && 'Adicionar Foto'}
        </NavLink>

        <button onClick={userLogout} >
          <Sair/>
          {isMobile && 'Sair'}
        </button>

      </NavContext>


    </>
  )

}

export default UserHeaderNav;
