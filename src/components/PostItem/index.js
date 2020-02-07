import React from 'react';

import './styles.css';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import share from '../../assets/share.svg';

import PostItemComment from '../PostItemComment';

function PostItem({ post, handlePostComment }) {




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
      <div className="post-options" >
        <div className="post-options-buttom">
          <img className="post-options-like" src={like} />
          <span>Curtir</span>
        </div>
        <div className="post-options-buttom"  onClick={handlePostComment}>
          <img className="post-options-comment" src={comment} />
          <span>Comentario</span>
        </div>
        <div className="post-options-buttom" >
          <img className="post-options-share" src={share} />
          <span>Compartilhar</span>
        </div>
      </div>
      <div className="post-comment" >
        <ul className="comment-list" >
          {
            post.commentState ? post.comments.map(comment => <PostItemComment key={comment.id} comment={comment} />) : <></>
          }
        </ul>
      </div>
    </li>
  );
}

export default PostItem;