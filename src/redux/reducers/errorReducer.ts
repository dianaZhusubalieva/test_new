import { Reducer } from 'redux';
import { ErrorState } from '../../types/loadingTypes';
import { Action } from '../../utils/storeUtils';

const initialState: ErrorState = {
    FETCH_POSTS: ''
};

export const errorReducer: Reducer<ErrorState, Action<string, string>> = (
    state = initialState,
    action
) => {
    const { type, payload } = action;
    const matches = /(.*)_(REQUEST|ERROR)/.exec(type);

    if (!matches) return state;

    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: requestState === 'ERROR' ? payload : ''
    };
};

export default errorReducer;
