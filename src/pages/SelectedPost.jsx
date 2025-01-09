import { Post } from '../components/Post.jsx';
import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';


export function SelectedPost() {
const {postId} = useParams();

const postData = useAsync(async () => {
  const url = `https://studapi.teachmeskills.by/blog/posts/${postId}`
  const response = await fetch(url);
  const data = await response.json()
  return data;
}, [postId]);

if (postData.loading) {
  return <div>Loading...</div>
}

if (postData.error) {
  return <div>{postData.error.message}</div>
}

  return  <Post {...postData.value} />
}
