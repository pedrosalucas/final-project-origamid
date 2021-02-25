import React from 'react';
import styled from 'styled-components';
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';

const CommentList = styled.ul`
    overflow-y: auto;
    word-break: break-word;
    padding: 0 2rem;

    li {
        margin-bottom: .5rem;
        line-height: 1.2;
    }
`;

const PhotoComments = ( props ) => {
    const [comments, setComments] = React.useState(() => props.comments);
    const commentsSection = React.useRef(null);
    const { login } = React.useContext(UserContext);
    
    React.useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments])

    return (
        <>
            <CommentList ref={commentsSection}>
                {comments.map(item => (
                    <li key={item.comment_ID}>
                        <b>{item.comment_author}: </b>
                        <span>{item.comment_content}</span>
                    </li>
                ))}
            </CommentList>
            {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
        </>
    );
};

export default PhotoComments;
