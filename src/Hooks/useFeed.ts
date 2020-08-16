import React, { useState, useCallback, useContext, useEffect } from 'react';
import { ResponseBase, Foto, ResponseApi } from '../models/Index';
import useApi from './useApi';

interface FeedResponse extends ResponseApi<Foto[]> {
    id: string;
    nomeDeUsuario: string;
}

interface Response extends ResponseBase {

    fotos: Foto[];
    buscarFeed: (usuarioId: string) => Promise<any>;

}


function useFeed(): Response {

    const { data, erro, loading, post } = useApi<FeedResponse>();
    const [sucesso, setSucesso] = useState<boolean>(false);

    const buscarFeed = useCallback(async (usuarioId: string) => {



    }, []);

    return {

        
        erro
        sucesso,
        buscarFeed

    }

}