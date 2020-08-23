import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Usuario } from '../../models/Index';
import { getUserIdByToken, getUserStored, storageTokenLocal, removeItemsLocalStorage } from '../../Shared/Helpers';
import useLogin from '../../Hooks/useLogin';
import useFeed from '../../Hooks/useFeed';



interface UsuarioContextData {
    usuario: Usuario | undefined;
    setUsuario: Dispatch<SetStateAction<Usuario | undefined>>;
}

export const UserContext = createContext<UsuarioContextData>({} as UsuarioContextData);

export const UserStorage: React.FC = ({ children }) => {

    const [usuario, setUsuario] = useState<Usuario | undefined>();   
    const navigate = useNavigate();
    const { verifyAuth, isAuthenticate } = useLogin();

    useEffect(() => {

        async function verifyUser() {

            const usuarioId = getUserIdByToken();
            if (!!!usuarioId)
                return;

            await verifyAuth();

            const user = getUserStored();
            setUsuario(user);
            navigate('/');

        }

        verifyUser();


    }, [navigate, verifyAuth]);


    function logout() {

        removeItemsLocalStorage();
        setUsuario(undefined);
    }


    useEffect(() => {
        
        if (!isAuthenticate)
            logout();

    }, [isAuthenticate]);

    return (
        <UserContext.Provider value={{
            usuario,
            setUsuario
        }}>
            {children}
        </UserContext.Provider>
    );
}

