import React, { useRef, useState } from 'react';

import { Comments, CommentSigle, Comment } from './styles';
import { Comentario } from '../../../models/Index';

interface PhotoCommentsProps {
    single: boolean;
    commentsPhoto: Comentario[];
}

const PhotoComments: React.FC<PhotoCommentsProps> = ({ single, commentsPhoto }) => {

    const CommentsContainer = single ? CommentSigle : Comments;
    const commentSection = useRef(null);
    const [comments, setComments] = useState<Comentario[]>(() => commentsPhoto)


    return (
        <CommentsContainer ref={commentSection}>

            {comments && comments.map( x => (
                
                <li key={x.id} >
                    <b>Autor: @{x.nomeDeUsuario}</b>
                    <span>{x.texto}</span>
                </li>

            ))}



        </CommentsContainer>
    );
}

export default PhotoComments;