import React, {useMemo} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Post, PostsPutPostDTO} from '../../types/content';
import * as yup from 'yup';
import {useFormik} from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {formikInputProps} from '../../utils/formik';
import {createPost, editPost} from '../../api/postsApi';
import {useSnackbar} from 'notistack';
import {AxiosError, AxiosResponse} from 'axios';
import {getApiError, getResponseError} from '../../api/utils';

interface FormProps {
    postToEdit: Post | null;
    closeModal: () => void;
    setShowModal?: () => void;
    onSuccess: () => void;
}

const emptyValues: PostsPutPostDTO = {
    title: '',
    body: ''
};

const schema = yup.object().shape({
    title: yup.string().required('field is required'),
    body: yup.string()
});

const PostForm: React.FC<FormProps> = ({ postToEdit, closeModal, onSuccess }) => {
    const validationSchema = schema;
    const { enqueueSnackbar } = useSnackbar();

    const isEditing = useMemo<boolean>(() => Boolean(postToEdit), [postToEdit]);
    const initialValues = useMemo(() => (postToEdit ? postToEdit : emptyValues), [postToEdit]);
    const title = useMemo(() => (postToEdit ? 'edit post' : 'create a post'), [postToEdit]);

    const onSubmit = (values: PostsPutPostDTO) => {
        const onCreateSuccessResponse = (response: AxiosResponse<any>) => {
            if (response.status === 201) {
                const successText = isEditing
                    ? `post "${values.title}" successfully edited`
                    : `post successfully created`;
                enqueueSnackbar(successText, { variant: 'success' });
                onSuccess();
                closeModal();
            } else {
                enqueueSnackbar(getResponseError(response), { variant: 'error' });
            }
        };
        const onEditSuccessResponse = (response: AxiosResponse<any>) => {
            if (response.status === 200) {
                const successText = isEditing
                    ? `post "${values.title}" successfully edited`
                    : `post successfully created`;
                enqueueSnackbar(successText, { variant: 'success' });
                onSuccess();
                closeModal();
            } else {
                enqueueSnackbar(getResponseError(response), { variant: 'error' });
            }
        };

        const onErrorResponse = (e: AxiosError) => {
            return enqueueSnackbar(getApiError(e), { variant: 'error' });
        };

        if (isEditing) {
            editPost(values).then(onEditSuccessResponse).catch(onErrorResponse);
        } else {
            createPost(values).then(onCreateSuccessResponse).catch(onErrorResponse);
        }
    };

    const formik = useFormik<PostsPutPostDTO>({ initialValues, validationSchema, onSubmit });
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            {...formikInputProps<PostsPutPostDTO>('title', formik)}
                            placeholder="title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>body</Form.Label>
                        <Form.Control
                            {...formikInputProps<PostsPutPostDTO>('body', formik)}
                            placeholder="body"
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                </form>
            </Modal.Body>
        </>
    );
};

export default PostForm;
