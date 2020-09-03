import React, { useCallback, useState, useEffect } from 'react';
import { ResponseBase, Comentario, ResponseApi } from '../models/Index';
import useApi from './useApi';



interface Response extends ResponseBase {
    comments: Comentario[];
    listCommentsThePhoto: (photoId: string) => Promise<any>;
}

function useComments(): Response {

    const { data, erro, loading, get } = useApi<ResponseApi<Comentario[]>>();

    const [message, setMessage] = useState<string>('');


    useEffect(() => {

        if (erro) {
            setMessage('Ocorreu um erro ao tentar buscar os comentários da foto');
            //setSuccess(false);
        }


    }, [erro]);



    const listCommentsThePhoto = useCallback(async (photoId: string): Promise<any> => {

        await get(`comentario/foto/${photoId}`, undefined);


    }, [get]);


    return {
        mensagem: message,
        erro,
        loading,
        sucesso: true,
        listCommentsThePhoto,
        comments: data.dados,

    }


}

export default useComments;
