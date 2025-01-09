import { useRef, useEffect, useState } from 'react';
import { useModal } from '../hooks/useModal.jsx';

export function Modal(props) {
    const modalRef = useRef(null)
    useModal(modalRef, props.isShown, props.onClose);

    return (
        <div className="modal fade" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modalRef}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" >{props.title}</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );      
}


