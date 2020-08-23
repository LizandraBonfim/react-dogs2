import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimeLeft, Titulo } from '../../../global';
import { Form } from './styles';

import Head from '../../../Shared/Head';
import Input from '../../Forms/Input/Index';
import Button from '../../Forms/Button/Index';
import useLogin from '../../../Hooks/useLogin';
import useForms from '../../../Hooks/useForm';

const LoginForm: React.FC = () => {

    const login = useForms('login');
    const senha = useForms('senha');


    const { sucesso, loading, erro, efetuarLogin } = useLogin();
    const navigate = useNavigate();


    async function handlerSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();        

        if (!login.isValid() || !senha.isValid())
            return;       

        await efetuarLogin({
            login: login.value as string,
            senha: senha.value as string
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
                <Input
                    label="Login / Email"
                    nome="login"
                    type="text"
                    value={login.value}
                    onChange={login.onChange}
                    erro={login.erro}
                    onBlur={login.onBlur}
                />

                <Input
                    label="Senha"
                    nome="senha"
                    type="password"
                    value={senha.value}
                    onChange={senha.onChange}
                    erro={senha.erro}
                    onBlur={senha.onBlur}
                />

                {loading && <Button disabled>Aguarde...</Button>}

                {!loading && <Button>Entrar</Button>}

                {erro && <p>{erro}</p>}
            </Form>
        </AnimeLeft>
    );
};

export default LoginForm;
