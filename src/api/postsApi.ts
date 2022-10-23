import config from "../config";
import axios, {AxiosInstance} from "axios";
import * as ep from "./endpoints";
import {Post} from "../types/posts";

const baseURL = config.MAIN_API_URL;

export const mainApi: AxiosInstance = axios.create({
    baseURL,
    headers: {
        "content-type": "application/json",
    },
});
export const getPosts = () => {
    return mainApi.get<Post[]>(ep.POSTS);
};
