import { FormikErrors, FormikProps } from 'formik';
import * as React from 'react';

interface FormikInputProps<Values> {
    id: keyof Values;
    name: keyof Values;
    value: Values[keyof Values] | string;
    error: boolean;
    helperText: string | FormikErrors<Values>[keyof Values];
    onChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
            ? void
            : (e: string | React.ChangeEvent<any>) => void;
    };
    fullWidth: boolean;
    autoComplete: string;
}

export const formikInputProps = <Values>(
    key: keyof Values,
    formik: FormikProps<Values>
): FormikInputProps<Values> => {
    const isError = formik.touched[key] && Boolean(formik.errors[key]);
    const error = formik.touched[key] && formik.errors[key] ? (formik.errors[key] as string) : ' ';
    return {
        error: isError,
        helperText: error,
        id: key,
        name: key,
        value: formik.values[key] || '',
        onChange: formik.handleChange,
        fullWidth: true,
        autoComplete: 'off'
    };
};
