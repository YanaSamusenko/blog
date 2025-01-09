
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/posts-slice';
import {PostLarge} from './PostLarge';
import {PostSmall} from './PostSmall';
import {PostMedium} from './PostMedium';


import '../styles/postList.scss';
 
export function PostsList() {
const dispatch = useDispatch();
const { posts: posts, isLoading, error } = useSelector((state) => state.posts);

useEffect(() => {
  if (!posts.length) {
    dispatch(fetchPosts());
  }
}, [dispatch, posts]);


if (isLoading) {
  return <h1>Loading...</h1>;
}

if (error) {
  return <h1>{error}</h1>;

}


  if (posts.length === 0) {
    return <h1>No posts</h1>;
  }

  const renderPostsLarge = () => {
    return posts.slice(0, 1).map(post => <PostLarge key={post.id} {...post} />);
  }

  const renderPostsMedium = () => {
    return posts.slice(1, 5).map(post => <PostMedium key={post.id} {...post} />);
  }

  const renderPostsSmall = () => {
    return posts.slice(5, 11).map(post => <PostSmall key={post.id} {...post} />);
  }

  return (
    <div className="d-flex justify-content-between">
    <div>
      {renderPostsLarge()}
      <div className="d-flex justify-content-between flex-wrap" style={{ maxWidth: '736px' }}>
        {renderPostsMedium()}
      </div>
    </div>
    <div className="container-fluid" style={{ maxWidth: '352px' }}>
      {renderPostsSmall()}
    </div>
  </div>
)
   
}
