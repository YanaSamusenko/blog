import React from 'react';
import { CardActions } from './CardActions';
import { useDispatch } from 'react-redux';
import { showPreviewModal, setPreviewData } from '../redux/preview-image-slice';
import '../styles/postLarge.scss';

export function PostLarge(props) {
  const dispatch = useDispatch();

  const handleClickImagePreview = () => {
    dispatch(setPreviewData(props));
    dispatch(showPreviewModal());
  };

    return (
      <div className="postLarge">
        <div className="postContainer">
          <div className="textContent">
            <p className="date">{props.createdAt}</p>
            <p className="title">{props.title}</p>
            <p className="text">{props.text}</p>
          </div>
          <div className="containerImg" >
            <img src={props.image} alt="post" onClick={handleClickImagePreview} className="img" />
          </div>
       <CardActions id={props.id} likes={props.likes} dislikes={props.dislikes} />
        </div>
      </div>
    );
  }

