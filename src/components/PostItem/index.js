import React from 'react';

import './styles.css';

import PostItemComment from '../PostItemComment';

function PostItem({ post })  {

  return (
    <li className="post-list-item" >
      <div className="head-post">
        <img src={post.author.avatar} />
        <div className="author">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>
      <p className="post-list-item-content" >{post.content}</p>
      <div className="post-div" ></div>
      <div className="post-comment" >
        <ul className="comment-list" >
          {post.comments.map(comment => <PostItemComment key={comment.id} comment={comment} />)}
        </ul>
      </div>
    </li>
  );
}

export default PostItem;