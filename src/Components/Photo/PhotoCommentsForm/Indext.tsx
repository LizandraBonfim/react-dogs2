import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from 'react';

import {
  Form,
  SingleForm,
  TextArea,
  BarkButton
} from './styles';


import {ReactComponent as Enviar} from '../../../Assets/enviar.svg';
import {Comentario} from "../../../models/Index";
import useComment from "../../../Hooks/useComment";
import Error from "../../../Shared/Error";
import {UserContext} from "../../UserContext/Index";

interface PhotoCommentsProps {
  photoId: string;
  isSingle: boolean;
  setComments: Dispatch<SetStateAction<Comentario[]>>;
}

const PhotoCommentsForm: React.FC<PhotoCommentsProps> = ({photoId, isSingle, setComments}) => {

  const Container = isSingle ? SingleForm : Form;

  const [formComment, setFormComment] = useState<string>('');

  const {sendComment, loading, erro, comment} = useComment();
  const {user} = useContext(UserContext);


  async function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!user) return;

    await sendComment({
      fotoId: photoId,
      usuarioId: user.id,
      texto: formComment
    });
  }


  useEffect(() => {

    console.log('comentario effect', comment)

    if (!comment)
      return;

    setComments((comments) => [...comments, comment])
    setFormComment('')

  }, [comment, setComments]);


  return (
    <Container onSubmit={handlerSubmit}>

      <TextArea
        id="comment"
        name="comment"
        disabled={loading}
        placeholder="Comente ..."
        value={formComment}
        onChange={({target}) => setFormComment(target.value)}
      />

      <BarkButton disabled={loading}>
        <Enviar/>
      </BarkButton>

      <Error error={erro}/>

    </Container>
  )

}

export default PhotoCommentsForm;
