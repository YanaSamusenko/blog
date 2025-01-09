import { useSelector } from "react-redux";
import { PostSmall } from "../components/PostSmall";
import { useTitle } from "../hooks/useTitle";

export function PostsPopular() {
  const { title } = useTitle("Popular Posts");

  const postsData = useSelector(state => state.posts.posts.filter(post => post.rating >= 3))
  const postsPopular = () => {
    return postsData.map(post => <PostSmall key={post.id} {...post} />)
  }
  

  if (postsPopular().length == 0) {
    return <h1>No popular posts</h1>;
  }

  return <div>{postsPopular()}</div>
}