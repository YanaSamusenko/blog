import React from 'react';
import {PostSmall} from '../components/PostSmall';
import '../styles/searchPosts.scss';

export function SearchPosts({posts}) {
return (
    <div className="searchPosts">
        {posts.filter(post => post.postSize === 'small').map(post => <PostSmall key={post.id} {...post} />)}
    </div>
)
}
