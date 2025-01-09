import '../styles/post.scss';
import { ImageBtn } from './ImageBtn';




export function Post(props) {

return (
  <>
      <div className="article">
          <img src={props.image} alt="article-image" className="post__image" />
          <div className="article-content">
              <article className="article__text">{props.text}</article>
              <div className="article__actions">
                  <div className="article__likes">
                      <div className="article__like">
                          <ImageBtn type="like" alt="like" style={{ width: '22px', height: '24px' }} />
                      </div>
                      <div className="article__dislike">
                          <ImageBtn type="dislike" alt="dislike" style={{ width: '22px', height: '24px' }} />
                      </div>
                  </div>
                  <div className="article__favourite">
                      <ImageBtn type="save" alt="save" style={{ width: '20px', height: '24px' }} />
                      <p className="mb-0" style={{ fontWeight: '500' }}>Add to favourites</p>
                  </div>
              </div>
          </div>
      </div>
  </>
)
}
