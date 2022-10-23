import { Reducer } from "redux";
import {Action} from "../../utils/storeUtils";
import {LoadingKeys, LoadingState} from "../../types/loadingTypes";

const initialState: LoadingState = {
    FETCH_POSTS: true,

};

const loadingReducer: Reducer<LoadingState, Action<string, undefined>> = (state: LoadingState = initialState, action) => {
    const { type } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|ERROR)/.exec(type);

    if (!matches) return state;
    const [, requestName, requestState] = matches;
    return {
        ...state,
        [requestName]: requestState === "REQUEST",
    };
};
export const createLoadingSelector = (actions: LoadingKeys[]) => (state: LoadingState) => actions.some((action) => state[action]);

export default loadingReducer;
