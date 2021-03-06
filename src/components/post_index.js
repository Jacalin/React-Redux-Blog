import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';


import { fetchPosts } from '../actions/index';
import { fetchAllComments } from '../actions/index';


class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts(1);
    this.props.fetchAllComments();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title.rendered}
          </Link>
          <div dangerouslySetInnerHTML={{ __html:post.excerpt.rendered}}></div>
        </li>
      )
    });
  }

  render () {

    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}


export default connect(mapStateToProps, { fetchPosts, fetchAllComments } )(PostsIndex);
