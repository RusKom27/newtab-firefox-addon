import { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';
import useModal from '../../hooks/useModal';

import styles from "./Modal.module.scss";

export default function Modal() {
    const modal = useModal();
    const modalRef = useRef<HTMLDialogElement>(null);
    const modalContentRef = useRef(null);

    useEffect(() => {
        if (!modalRef.current) return;

        if (modal.isOpen) {
            modalRef.current.showModal();

        } else {
            modalRef.current.close();
        }
    }, [modal.isOpen]);

    // скрываем модалку при клике за пределами ее содержимого
    useClickAway(modalContentRef, modal.close);

    if (!modal.isOpen) return null;

    return (
        <dialog
            className={styles.dialog}
            ref={modalRef}
        >
            <div
                className={styles.modal}
                ref={modalContentRef}
            >
                <div className={styles.header}>
                    {modal.title}
                </div>
                <div className={styles.container}>{modal.children}</div>
                <button className={styles.close} onClick={modal.close}>
                    <img src="../../../src/assets/cross.png" alt=""/>
                </button>
            </div>
        </dialog>
    );
}