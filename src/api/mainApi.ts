import config from '../config';
import axios, { AxiosInstance } from 'axios';
import * as ep from './endpoints';
import { CommentDTO, Post, PostsPutPostDTO } from '../types/content';

const baseURL = config.MAIN_API_URL;

export const mainApi: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'content-type': 'application/json'
    }
});
export const getPosts = () => {
    return mainApi.get<Post[]>(ep.POSTS);
};

export const createPost = (post: PostsPutPostDTO) => {
    return mainApi.post<PostsPutPostDTO>(ep.POSTS, post);
};

export const editPost = (post: PostsPutPostDTO) => {
    const data = {
        title: post.title,
        body: post.body
    };
    return mainApi.put<PostsPutPostDTO[]>(`${ep.POSTS}/${post.id}`, data);
};

export const postComment = (data: CommentDTO) => {
    return mainApi.post<PostsPutPostDTO>(ep.COMMENTS, data);
};

export const getPost = (id: number) => {
    const params = {
        _embed: 'comments'
    };
    return mainApi.get<any>(`${ep.POST}/${id}`, { params });
};
