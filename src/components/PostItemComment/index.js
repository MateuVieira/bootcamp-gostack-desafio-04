import React from 'react';

import './styles.css';

function PostItemComment({ comment }) {

  return (
    <li className="comment-item" >
      <img src={comment.author.avatar} />
      <div className="comment-item-content" >
        <strong>{comment.author.name}</strong>
        <span className="comment-content" >     {comment.content}</span>
      </div>
    </li>
  );
}

export default PostItemComment;