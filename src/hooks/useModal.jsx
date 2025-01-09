import { useState, useEffect, useRef} from "react";
import Modal from 'bootstrap/js/dist/modal';


export function useModal(ref, isShown, onClose = () => {}) {
    const [modalInstance, setModalInstance] = useState(null);

    useEffect(() => {
        setModalInstance(Modal.getOrCreateInstance(ref.current))
        ref.current.addEventListener('hidden.bs.modal', onClose)
        }, [ref, modalInstance, onClose])

    useEffect(() => {
        if (!modalInstance) return
        if (isShown) {
            show()
        } else {
            hide()
        }
        }, [isShown, modalInstance, show, hide])

    function show() {
        modalInstance.show()
    }

    function hide() {
        modalInstance.hide()    
    }

    return modalInstance, show, hide
}