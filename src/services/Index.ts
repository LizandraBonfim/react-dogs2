import api from "./api";
import { storageTokenLocal } from "../Shared/Helpers";

interface Login {
    login: string;
    senha: string;
}

interface LoginResponse {

    autenticado: boolean;
    usuarioId: string;
    criado: Date;
    expiracao: Date;
    tokenDeAcesso: string;
    mensagem: string;

}


export async function efetuarLogin(login: Login): Promise<LoginResponse | undefined> {

    try {


        const { data, status } = await api.post<LoginResponse>('/token/auth', login);
        storageTokenLocal(data.tokenDeAcesso);

        return data;

    } catch (erro) {

        const mensagem = 'Ocorreu um erro ao tentar efetuar o login';
        //TODO: logar no sistema de log
        console.log('erro', mensagem);
        console.log('erro', erro);
        return undefined;

    }

} 