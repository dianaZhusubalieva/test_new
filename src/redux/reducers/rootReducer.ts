import { combineReducers } from 'redux';
import contentReducer from './contentReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    errors: errorReducer,
    loading: loadingReducer,
    content: contentReducer
});

export default rootReducer;
