import { ActionCreator, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { fetchPostsError, fetchPostsRequest, fetchPostsSuccess } from '../actionCreators/contentAC';
import { getPosts } from '../../api/postsApi';
import { getApiError, getResponseError } from '../../api/utils';
import { RootState } from '../store';

const fetchPostsThunk: ActionCreator<ThunkAction<void, RootState, unknown, AnyAction>> =
    () => (dispatch) => {
        dispatch(fetchPostsRequest());
        getPosts()
            .then((response) => {
                if (response.status === 200) {
                    dispatch(fetchPostsSuccess(response.data));
                } else {
                    dispatch(fetchPostsError(getResponseError(response)));
                }
            })
            .catch((e) => {
                dispatch(fetchPostsError(getApiError(e)));
            });
    };

export default fetchPostsThunk;
