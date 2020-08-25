import React, { useRef } from 'react';

import { Comments, CommentSigle, Comment } from './styles';

interface PhotoCommentsProps {
    single: boolean;
}

const PhotoComments: React.FC<PhotoCommentsProps> = ({ single }) => {

    const CommentsContainer = single ? CommentSigle : Comments;
    const commentSection = useRef(null);
    

    return (
        <CommentsContainer ref={commentSection}>

            <li>
                <b>Autor: </b>
                <span>Isso é um comentário</span>
            </li>
                        
        </CommentsContainer>
    );
}

export default PhotoComments;