import { createAction } from '../../utils/storeUtils';
import {
    FETCH_POSTS_ERROR,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS
} from '../actionTypes/contentAT';
import { Post } from '../../types/content';

export const fetchPostsRequest = () =>
    createAction<typeof FETCH_POSTS_REQUEST, undefined>(FETCH_POSTS_REQUEST, undefined);
export const fetchPostsSuccess = (posts: Post[]) =>
    createAction<typeof FETCH_POSTS_SUCCESS, Post[]>(FETCH_POSTS_SUCCESS, posts);
export const fetchPostsError = (error: string) =>
    createAction<typeof FETCH_POSTS_ERROR, string>(FETCH_POSTS_ERROR, error);
