import React, { PropsWithChildren } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalProps {
    show: boolean;
    setShow: (value: boolean) => void;
    onClose: () => void;
}
const MyModal: React.FC<PropsWithChildren<ModalProps>> = ({ show, setShow, children, onClose }) => {
    return (
        <Modal show={show} onHide={onClose}>
            {children}
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={() => {
                        setShow(false);
                        onClose();
                    }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyModal;
