import { useState, useCallback, useContext, useEffect } from "react";
import useApi from "./useApi";
import { storageTokenLocal, storeUser } from "../Shared/Helpers";
import { UserContext } from "../Components/UserContext/Index";
import { Usuario } from "../models/Index";

interface Login {
  login: string;
  senha: string;
}

interface LoginResponse {
  autenticado: boolean;
  usuario: Usuario;
  criado: Date;
  expiracao: Date;
  tokenDeAcesso: string;
  mensagem: string;
}

interface Response {
  sucesso: boolean;
  erro: string | undefined;
  loading: boolean | undefined;
  efetuarLogin: (login: Login) => Promise<any>;
  verifyAuth: () => Promise<boolean>;
  isAuthenticate: boolean
}

function useLogin(): Response {

  const {
    data,
    erro,
    setErro,
    loading,
    get,
    setLoading,
    post } = useApi<LoginResponse>();

  const [sucesso, setSucesso] = useState<boolean>(false);
  const { setUsuario } = useContext(UserContext);
  const [ isAuthenticate, setIsAuthenticate] = useState<boolean>(true);

  const efetuarLogin = useCallback(async (login: Login) => {

    setLoading(true);

    await post("token/auth", login);

    setSucesso(true);

  }, [post, setLoading]
  );



  const verifyAuth = useCallback(async (): Promise<boolean> => {

    try {

      setLoading(true);
      await get('token/verify-token', null);
      setIsAuthenticate(true);
      

      return Promise.resolve(true);

    } catch (error) {

      const text = 'erro ao tentar verificar o token é valido';            
      setErro(text);
      setIsAuthenticate(false);
      return Promise.reject(false);

    } finally {

      setLoading(false);

    }




  }, [get, setLoading, setErro]);

  useEffect(() => {
    if (!sucesso) return;

    console.log("resultado login", data);
    storageTokenLocal(data?.tokenDeAcesso);
    setUsuario(data?.usuario);
    storeUser(data?.usuario);

  },
    [sucesso, data, setUsuario]);

  return {
    sucesso,
    loading,
    erro,
    efetuarLogin,
    verifyAuth,
    isAuthenticate
  };
}

export default useLogin;
