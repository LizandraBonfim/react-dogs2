import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Usuario } from '../../models/Index';
import { getUserIdByToken, getUserStored } from '../../Shared/Helpers';



interface UsuarioContextData {
    usuario: Usuario | undefined;
    setUsuario: Dispatch<SetStateAction<Usuario | undefined>>;
}

export const UserContext = createContext<UsuarioContextData>({} as UsuarioContextData);

export const UserStorage: React.FC = ({ children }) => {

    const [usuario, setUsuario] = useState<Usuario | undefined>();
    const navigate = useNavigate();

    useEffect(() => {        

        const usuarioId = getUserIdByToken();
        if (!!!usuarioId)
            return;

        const user = getUserStored();
        setUsuario(user);

        navigate('/conta');


    }, [navigate]);

    return (
        <UserContext.Provider value={{
            usuario,
            setUsuario
        }}>
            {children}
        </UserContext.Provider>
    );
}

