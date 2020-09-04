import React, {useState, useCallback, useContext, useEffect} from 'react';
import {ResponseBase, Foto, ResponseApi, Usuario} from '../models/Index';
import useApi from './useApi';

interface FeedResponse extends ResponseApi<Usuario[]> {
  id: string;
  nomeDeUsuario: string;
}

interface Response extends ResponseBase {

  feeds: Usuario[];
  buscarFeed: (usuarioId: string | undefined) => Promise<any>;

}

interface Request {
  userName?: string;
  userId?: string;
}

function useFeed({userName, userId}: Request): Response {

  const {data, erro, loading, get} = useApi<FeedResponse>();

  const buscarFeed = useCallback(async () => {

    const parameter = userId ? userId : userName;
    await get('feed', parameter);

  }, [get]);

  return {

    mensagem: '',
    loading,
    feeds: data.dados,
    erro,
    buscarFeed

  }

}

export default useFeed;
