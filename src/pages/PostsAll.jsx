import { useEffect, useState } from "react";
import { PostsList } from "../components/PostsList";

export function PostsAll() {
    const [postsData, setPostsData] = useState(true);

    if (!postsData) {
        return <div>No posts</div>
    }

    useEffect(() => {
        setPostsData(true);
    }, []);

    return <PostsList posts={postsData} />
      
}