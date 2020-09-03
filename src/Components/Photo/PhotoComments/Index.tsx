import React, {useContext, useEffect, useRef, useState} from 'react';

import {Comments, CommentSigle, Comment} from './styles';
import useComments from "../../../Hooks/useComments";
import Loading from "../../../Shared/Loading/Index";
import Error from "../../../Shared/Error";
import {UserContext} from "../../UserContext/Index";
import PhotoCommentsForm from "../PhotoCommentsForm/Indext";
import {Comentario} from "../../../models/Index";

interface PhotoCommentsProps {
  single: boolean;
  photoId: string;
}

const PhotoComments: React.FC<PhotoCommentsProps> = ({single, photoId}) => {

  const {user} = useContext(UserContext)

  const CommentsContainer = single ? CommentSigle : Comments;
  const commentSection = useRef<HTMLUListElement>(null);

  const {comments, erro, loading, listCommentsThePhoto} = useComments();
  const [photoComments, setPhotoComments] = useState<Comentario[]>([]);

  // Busca os comentarios das fotos
  useEffect(() => {

    async function handlerLoadComments() {

      await listCommentsThePhoto(photoId);

    }

    const promise = handlerLoadComments();

  }, [photoId, listCommentsThePhoto]);

  useEffect(() => {

    if (comments)
      setPhotoComments(comments);

  }, [comments]);

  useEffect(() => {

    if (!commentSection.current)
      return;

    commentSection.current.scrollTop = commentSection.current.scrollHeight;

  }, [comments]);

  if (erro) return <Error error={erro}/>
  if (loading) return <Loading/>

  return (
    <>
      <CommentsContainer ref={commentSection}>

        {photoComments && photoComments.map(x => (

          <li key={x.id}>
            <b>@{x.nomeDeUsuario}: </b>
            <span>{x.texto}</span>
          </li>

        ))}

      </CommentsContainer>

      <div>
        {user && <PhotoCommentsForm photoId={photoId} isSingle={single} setComments={setPhotoComments}/>}
      </div>

    </>

  );
}

export default PhotoComments;
