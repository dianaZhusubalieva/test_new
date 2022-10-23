import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { FETCH_POSTS } from '../redux/actionTypes/contentAT';
import { RootState } from '../redux/store';
import { ErrorKeys, ErrorState } from '../types/loadingTypes';

const actions: ErrorKeys[] = [FETCH_POSTS];

const GlobalErrorsToast = () => {
    const errors = useSelector<RootState, ErrorState>((state: RootState) => state.errors);
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    useEffect(() => {
        const errorsList: [ErrorKeys, string][] = actions.map((action) => [action, errors[action]]);

        if (errorsList) {
            errorsList.forEach(([action, error]) => {
                if (error) {
                    enqueueSnackbar(error, { variant: 'error' });
                    dispatch({ type: action + '_ERROR', payload: '' });
                }
            });
        }
    }, [errors, enqueueSnackbar, dispatch]);

    return null;
};

export default GlobalErrorsToast;
