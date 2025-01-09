import { Modal } from './Modal';    
import { useSelector, useDispatch } from 'react-redux';
import { hidePreviewModal, resetPreviewData} from '../redux/preview-image-slice';

export function ModalPreviewImage() {
    const {isShownModal, data: post} = useSelector(state => state.previewImage);   
    const dispatch = useDispatch();

    const handleClose = () => {
         dispatch(hidePreviewModal());
         dispatch(resetPreviewData());
    };

    const renderImage = () => {
        if(!Object.keys(post).length) return 'No data';

        return (
            <article>
                <figure>
                    <img src={post.image} className="img-fluid" alt="" />
                    </figure>
            </article>
        )
    }
   
        return (
            <Modal
                title="Preview image"
                isShown={isShownModal}
                onClose={handleClose}
            >
                {renderImage()}
                </Modal>
        )
    }


  