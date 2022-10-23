import React, { useState } from 'react';
import './card.scss';
import { Post } from '../../types/content';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import { postComment } from '../../api/postsApi';
import { useSnackbar } from 'notistack';
import { getApiError, getResponseError } from '../../api/utils';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    post: Post;
    setPostToEdit: (p: Post | null) => void;
    setShow: (v: boolean) => void;
}
const Card = ({ post, setPostToEdit, setShow }: CardProps) => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const [comment, setComment] = useState<string>('');

    const createComment = () => {
        if (comment.length) {
            const data = {
                postId: post.id,
                body: comment
            };
            postComment(data)
                .then((res) => {
                    if (res.status === 201) {
                        enqueueSnackbar('comment posted', { variant: 'success' });
                    } else {
                        enqueueSnackbar(getResponseError(res), { variant: 'error' });
                    }
                })
                .catch((e) => enqueueSnackbar(getApiError(e), { variant: 'error' }));
        }
    };
    return (
        <div className="card-block">
            <div className="card__wrapper">
                <div className="card__info">
                    <span>
                        <i className="fas fa-eye"></i>2350
                    </span>
                    <span>
                        <i className="fas fa-comment-alt"></i>624
                    </span>
                    <span>
                        <i className="fas fa-download"></i>1470
                    </span>
                </div>
                <div className="card__profile">
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="people"
                    />
                    <div className="card__profile__text">
                        <h2>{post.title}</h2>
                        <p>
                            <b>{post.body}</b>
                        </p>
                        <div className="actions">
                            <Button
                                variant="outline-dark"
                                onClick={() => {
                                    setPostToEdit(post);
                                    setShow(true);
                                }}>
                                edit
                            </Button>
                            <div className="comment-form">
                                <FormControl
                                    placeholder="comment..."
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <Button variant="info" onClick={createComment}>
                                    leave a comment
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="see-comments-btn">
                <Button variant="info" onClick={() => navigate(`/post/${post.id}`)}>
                    see comments
                </Button>
            </div>
        </div>
    );
};

export default Card;
