import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FacebookShareButton } from 'react-share';

import { fetchPost } from '../actions/index';
import { fetchPostComments } from '../actions/index';

import PostComments from './post_comments';
import CommentBox from './post_comment_box';


class PostDetail extends Component {

  componentWillMount(){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    this.props.fetchPostComments(id);
  }

  render () {
    console.log(this.props.match.url)
    const { post } = this.props;

    if(!post){
      return <div></div>
    }

    return(
      <div className="container">
        <Link to="/">Back</Link>
        <h1>{post.title.rendered}</h1>
        <p dangerouslySetInnerHTML={{ __html:post.content.rendered}}></p>
        <PostComments singlePost={this.props.match.params} />
        <CommentBox id="commentBox" post={this.props.match.params} />
        <FacebookShareButton size={32} url={'www.google.com'} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
      post: state.posts[ownProps.match.params.id],
      comment: state.comments
    }
}

export default connect(mapStateToProps,{fetchPost,fetchPostComments})(PostDetail);
