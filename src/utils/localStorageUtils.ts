import { RootState } from '../redux/store';

export const loadState = () => {
    try {
        const serializedStore = localStorage.getItem('blog');
        if (serializedStore === null) {
            return undefined;
        }
        const state: RootState = JSON.parse(serializedStore);

        return state;
    } catch (err) {
        return undefined;
    }
};

export const saveState = (store: any) => {
    try {
        const serializedStore = JSON.stringify({
            ...store,
            loading: undefined,
            errors: undefined
        });

        localStorage.setItem('blog', serializedStore);
    } catch (err: any) {
        new Error(err);
    }
};
