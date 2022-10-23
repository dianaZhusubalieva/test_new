import {FETCH_POSTS} from "../redux/actionTypes/contentAT";

export type LoadingKeys =
    | typeof FETCH_POSTS

export type ErrorKeys = LoadingKeys;

export type LoadingState = {
    readonly [K in LoadingKeys]: boolean;
};

export type ErrorState = {
    readonly [K in ErrorKeys]: string;
};
