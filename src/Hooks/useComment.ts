import React, {useCallback, useState, useEffect} from 'react';
import {ResponseBase, Comentario, ResponseApi} from '../models/Index';
import useApi from './useApi';

interface RequestSendComment {
  fotoId: string;
  usuarioId: string;
  texto: string;

}

interface Response extends ResponseBase {

  comment: Comentario;
  sendComment: (command: RequestSendComment) => Promise<void>;
}

function useComment(): Response {

  const {data, erro, loading, post} = useApi<ResponseApi<Comentario>>();


  const [message, setMessage] = useState<string>('');


  useEffect(() => {

    if (erro)
      setMessage('Ocorreu um erro ao tentar postar um comentário');

  }, [erro]);

  const sendComment = useCallback(async (command: RequestSendComment): Promise<void> => {

    return await post('comentario', command);

  }, [post]);


  return {
    mensagem: message,
    erro,
    loading,
    sucesso: data.sucesso,
    comment: data.dados,
    sendComment

  }


}

export default useComment;
