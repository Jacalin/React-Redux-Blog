import React, { Component }from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { currentCommenter } from '../actions/index';
import Comment from './comment';


class PostComments extends Component {

  currentCommenterOnClick(id) {
  this.props.currentCommenter(id)
  }

  nestComments(comments,parent) {

    const newCommentsArray = Object.values(comments).map((comment) => comment);
    let node = {}
    newCommentsArray
      .filter(c => c.parent === parent)
      .forEach(c => node[c.id] = {
        children: this.nestComments(newCommentsArray, c.id),
        comment: c
      })
    return node

	}

  // <div>
  //   <Scrollchor to='#commentBox' className="nav-link">
  //   <button
  //     className="btn btn-primary"
  //     onClick={this.currentCommenterOnClick.bind(this, props.comment.id)}>click</button>
  //   </Scrollchor>
  // </div>


  renderNestedComments(nestedComments){
    return <ul className="comments">{Object.keys(nestedComments).map(commentId => {
				const comment = nestedComments[commentId].comment;
				return <li key={comment.id} className="comment card">
					{(comment.id) ?
						<Comment comment={comment} parentId={comment.id}/>
						: ''}
					{this.renderNestedComments(
						nestedComments[commentId].children)}
				</li>;
			})}</ul>;
  }

  render () {

    if(!this.props.comment){
      return <div></div>
    }

    return(
      <div>
        {this.renderNestedComments(this.nestComments(this.props.comment,0))}
      </div>
    )
  }
}

function mapStateToProps(state,ownProps) {
    return {
      comment: state.comments[ownProps.singlePost.id],
      current: state.current
     }
}


export default connect(mapStateToProps,{ currentCommenter })(PostComments);
