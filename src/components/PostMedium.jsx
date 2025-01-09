import React from 'react';
import '../styles/postMedium.scss';
import { useDispatch } from 'react-redux';
import { showPreviewModal, setPreviewData } from '../redux/preview-image-slice';
import { CardActions } from './CardActions';


export function PostMedium(props) {
  const dispatch = useDispatch();

  const handleClickImagePreview = () => {
    dispatch(setPreviewData(props));
    dispatch(showPreviewModal());
  };


    return (
      <div className="postMedium">
        <div className="postContainer">
          <div className="textContent">
            <p className="date">{props.createdAt}</p>
            <p className="title">{props.title}</p>
            <p className="text">{props.text}</p>
          </div>
          <div className="containerImg">
            <img src={props.image}  onClick={handleClickImagePreview} alt="post" className="img" />
          </div>
          <CardActions id={props.id} likes={props.likes} dislikes={props.dislikes} />
        </div>
      </div>
    );
  }

