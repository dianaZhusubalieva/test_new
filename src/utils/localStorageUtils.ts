import { RootState } from '../redux/store';

export const loadState = () => {
    try {
        const serializedStore = localStorage.getItem('BalanceAdmin');
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

        localStorage.setItem('BalanceAdmin', serializedStore);
    } catch (err: any) {
        new Error(err);
    }
};
