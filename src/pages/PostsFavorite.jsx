import { useSelector } from "react-redux";
import { PostLarge } from "../components/PostLarge";
import { useTitle } from "../hooks/useTitle";

export function PostsFavorite() {

  const { title } = useTitle("Favorite Posts");

  const postsData = useSelector(state => state.posts.posts);
  const postsFavorite = () => {
    return postsData
      .filter(post => post.favorite)
      .map(post => <PostLarge key={post.id} {...post} />);
  }

  if (postsFavorite().length == 0) {
    return <h1>No favorite posts</h1>;
  }

  return <div>{postsFavorite()}</div>
}

 
