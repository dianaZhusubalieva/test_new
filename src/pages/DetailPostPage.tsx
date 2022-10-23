import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../api/postsApi';
import { RetrievedPost } from '../types/content';
import './styles.scss';
import '../components/card/card.scss';

const DetailPostPage = () => {
    const { id } = useParams();

    const [currentPost, setCurrentPost] = useState<RetrievedPost | null>(null);
    console.log(currentPost);

    useEffect(() => {
        if (id) {
            getPost(Number(id)).then((res) => {
                if (res.status === 200) {
                    setCurrentPost(res.data);
                }
            });
        }
    }, [id]);

    return currentPost ? (
        <div className="detail-page__wrapper">
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
                        <h2>{currentPost.title}</h2>
                        <p>
                            <b>{currentPost.body}</b>
                        </p>
                    </div>
                </div>
            </div>

            <div className="comments-block">
                {currentPost.comments.length
                    ? currentPost.comments.map((comm) => <span key={comm.id}>{comm.body}</span>)
                    : 'no comments'}
            </div>
        </div>
    ) : (
        <div>no content</div>
    );
};

export default DetailPostPage;
