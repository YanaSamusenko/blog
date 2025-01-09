import { useDispatch } from 'react-redux';
import { like, dislike, favorite } from "../redux/posts-slice";
import { ImageBtn } from './ImageBtn';

export function CardActions(props) {

    const dispatch = useDispatch();

    const handleLike = () => {
      console.log('click')
        dispatch(like(props.id));
    }

    const handleDislike = () => {
      console.log('click')
        dispatch(dislike(props.id));
    }

    const handleFavorite = () => {
      console.log('click')
      dispatch(favorite(props.id));
    };

    return (
        <div className="postButtons">
        <button type="button" className="like" onClick={handleLike}>
          <ImageBtn type="like"></ImageBtn>
        </button>
        <button type="button" className="dislike" onClick={handleDislike}>
          <ImageBtn type="dislike"></ImageBtn>
        </button>
        <div className="saveAndMore">
          <button type="button" className="save"  onClick={handleFavorite}>
          <ImageBtn type="save"></ImageBtn>
          </button>
          <button type="button" className="more">
          <ImageBtn type="more"></ImageBtn>
         </button>
        </div>
      </div>

    )
}