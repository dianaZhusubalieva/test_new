import React, { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import './home.scss';
import { createLoadingSelector } from '../../redux/reducers/loadingReducer';
import { FETCH_POSTS } from '../../redux/actionTypes/contentAT';
import { useAppDispatch, useAppSelector } from '../../utils/tsUtils';
import fetchPostsThunk from '../../redux/middlewares/postsMiddleware';
import { Post } from '../../types/content';
import MyModal from '../../components/modal/Modal';
import PostForm from '../../components/form/PostForm';
import Button from 'react-bootstrap/Button';

const postsLoadingSelector = createLoadingSelector([FETCH_POSTS]);

const HomePage = () => {
    const dispatch = useAppDispatch();

    const [postToEdit, setPostToEdit] = useState<Post | null>(null);
    const [showModal, setShowModal] = useState(false);

    const isPushesNotFetched = useAppSelector((state) => postsLoadingSelector(state.loading));
    const posts = useAppSelector((state) => state.content.posts);

    useEffect(() => {
        if (isPushesNotFetched) {
            dispatch(fetchPostsThunk());
        }
    });
    console.log();
    return (
        <>
            <div className="btn-wrapper">
                <Button variant="secondary" onClick={() => setShowModal(true)}>
                    create a post
                </Button>
            </div>
            <div className="main-page__wrapper">
                {posts.map((post: Post) => (
                    <Card
                        setShow={setShowModal}
                        setPostToEdit={setPostToEdit}
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
            <MyModal
                show={showModal}
                setShow={setShowModal}
                onClose={() => {
                    setPostToEdit(null);
                    setShowModal(false);
                }}>
                <PostForm
                    closeModal={() => {
                        setPostToEdit(null);
                        setShowModal(false);
                    }}
                    onSuccess={() => dispatch(fetchPostsThunk())}
                    postToEdit={postToEdit}
                />
            </MyModal>
        </>
    );
};

export default HomePage;
