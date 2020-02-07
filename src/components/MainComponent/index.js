import React, { Component } from 'react';

import './styles.css';

import PostItem from '../PostItem';

class Timeline extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://avatars2.githubusercontent.com/u/35344433?s=400&u=169aa320fbd579386238366e0c62ffc4a0aeae5a&v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus metus ac dignissim dapibus. Vestibulum condimentum viverra gravida. Nulla laoreet non nulla eu blandit. Ut ipsum tellus, vulputate non libero vitae, scelerisque venenatis urna. Ut imperdiet vitae nibh eu eleifend. Donec lobortis felis in aliquam condimentum. Morbi eget erat in ex dapibus maximus. Pellentesque tempor augue ac viverra facilisis. Maecenas at vestibulum nisl. Suspendisse potenti. "
          }
        ]
      },
      {
        id: 2
        // Restante dos dados de um novo post
      }
    ]
  };


  render() {
    return (
      <ul className="post-list" >
       {}
      </ul>
    );
  }
}

export default Timeline;