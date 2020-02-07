import React, { Component } from 'react';

import './styles.css';

class PostItem extends Component {
  render() {
    return (
      <li className="post-list-item" >
        <div className="head-post">
          <img src={this.state.posts[0].author.avatar} />
          <div className="author">
            <strong>{this.state.posts[0].author.name}</strong>
            <span>{this.state.posts[0].date}</span>
          </div>
        </div>
        <p className="post-list-item-content" >{this.state.posts[0].content}</p>
        <div className="post-div" ></div>
        <div className="post-comment" >
          <ul className="comment-list" >
            <li className="comment-item" >
              <img src={this.state.posts[0].author.avatar} />
              <div className="comment-item-content" >
                <strong>{this.state.posts[0].comments[0].author.name}</strong>
                <span className="comment-content" >     {this.state.posts[0].comments[0].content}</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default PostItem;