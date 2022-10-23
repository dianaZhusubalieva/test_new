import { Reducer } from 'redux';
import { ContentAction, ContentState } from '../types/contentTypes';
import { FETCH_POSTS_SUCCESS } from '../actionTypes/contentAT';

const initialState: ContentState = {
    posts: []
};

const contentReducer: Reducer<ContentState, ContentAction> = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            };
        default:
            return state
    }
};

export default contentReducer;
