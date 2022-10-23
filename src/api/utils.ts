import axios, { AxiosResponse } from 'axios';

export const isError = function (e: any): e is Error {
    return e && e.stack && e.message;
};
export const getNativeErrorMessage = function (e: any): string {
    return isError(e) ? e.message : 'unknown error';
};

export const getApiError = (e: any): string => {
    try {
        if (axios.isAxiosError(e)) {
            return e.message;
        }
        return getNativeErrorMessage(e);
    } catch (error) {
        return 'unknown error';
    }
};

export const getResponseError = (res: AxiosResponse<any>) => {
    return res.data.response || 'unknown error';
};
