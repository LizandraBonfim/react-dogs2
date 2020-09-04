import {Foto, ResponseApi, ResponseBase} from "../models/Index";
import useApi from "./useApi";
import {useCallback} from "react";

interface Response extends ResponseBase {
  sendNewPhoto: (command: FormData) => Promise<void>;
  getPhoto: (photoId: string) => Promise<void>;
  addQtyAccess: (photoId: string) => Promise<void>;
  photo: Foto
}


const usePhoto = (): Response => {

  const {post, erro, loading, sucess, get, data } = useApi<ResponseApi<Foto>>();

  const sendNewPhoto = useCallback(async (command: FormData): Promise<void> => {

    return await post('foto', command);

  }, [post]);

  const getPhoto = useCallback(async (photoId: string ): Promise<void> => {

    return  await get(`foto/${photoId}`, null);

  }, [get]);

  const addQtyAccess = useCallback(async (photoId: string): Promise<void> => {

    console.log('photoId', photoId)

    return await post('foto/incrementar-acesso', {
      id: photoId
    });

  }, [post])


  return {
    sucesso: sucess,
    loading,
    erro,
    sendNewPhoto,
    getPhoto,
    photo: data.dados,
    addQtyAccess
  }

}

export default usePhoto;
