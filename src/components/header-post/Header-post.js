import React from 'react';

import './Header-post.scss';

const HeaderPost = ({ liked, allPosts }) => {
    return (
        <div className="headerpost">
            Total posts {allPosts}, Favorite posts {liked}.
        </div>
    )
}

export default HeaderPost;