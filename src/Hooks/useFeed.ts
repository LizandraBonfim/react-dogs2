import React, { useState, useCallback, useContext, useEffect } from 'react';
import { ResponseBase, Foto, ResponseApi, Usuario } from '../models/Index';
import useApi from './useApi';

interface FeedResponse extends ResponseApi<Usuario[]> {
    id: string;
    nomeDeUsuario: string;
}

interface Response extends ResponseBase {

    feeds: Usuario[];
    buscarFeed: (usuarioId: string | undefined) => Promise<any>;

}


function useFeed( usuarioId: string | undefined ): Response {

    const { data, erro, loading, get } = useApi<FeedResponse>();
    const [sucesso, setSucesso] = useState<boolean>(false);

    const buscarFeed = useCallback(async () => {
        
        await get('feed', usuarioId);

    }, [ get, usuarioId ]);

    return {

        mensagem: '',
        loading,
        feeds: data.dados,
        erro,
        sucesso,
        buscarFeed

    }

}

export default useFeed;