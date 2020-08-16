import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimeLeft, Titulo } from '../../../global';
import { Form } from './styles';

import Head from '../../../Shared/Head';
import Input from '../../Forms/Input/Index';
import Button from '../../Forms/Button/Index';
import useLogin from '../../../Hooks/useLogin';

const LoginForm: React.FC = () => {
    const { sucesso, loading, erro, efetuarLogin } = useLogin();
    const navigate = useNavigate();

    async function handlerSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        await efetuarLogin({
            login: 'fulano joe',
            senha: 'fulano',
        });
    }

    useEffect(() => {
        if (!sucesso) return;
        navigate('/');
    }, [sucesso, navigate]);

    return (
      <AnimeLeft>
          <Head title="Login" description="Tela de login" />
          <Titulo>Login</Titulo>
          <Form onSubmit={handlerSubmit}>
              <Input label="Login / Email" nome="login" type="text" erro="" />
              <Input label="Senha" nome="senha" type="password" erro="" />

              {loading && <Button disabled>Aguarde...</Button>}

              {!loading && <Button>Entrar</Button>}

              {erro && <p>{erro}</p>}
            </Form>
        </AnimeLeft>
    );
};

export default LoginForm;
