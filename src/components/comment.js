import React from 'react';
//import Scrollchor from 'react-scrollchor';

const Comment = (props) => {
  return (
    <div>
      <h3>{props.comment.author_name}</h3>
      <p dangerouslySetInnerHTML={{ __html: props.comment.content.rendered}}></p>
    </div>
  )
}

export default Comment
