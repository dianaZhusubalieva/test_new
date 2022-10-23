import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../utils/localStorageUtils';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const persistedState = loadState();
export type RootState = ReturnType<typeof rootReducer>;

const store: Store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
