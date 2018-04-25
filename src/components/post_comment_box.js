import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { createComment } from '../actions/index';

class CommentBox extends React.Component {

  showResults(values) {
    createComment(values, this.props.current, this.props.post);
  }

  render () {
    const {handleSubmit} = this.props;
    return(
      <div id={this.props.id} >
        <form onSubmit={handleSubmit(this.showResults.bind(this))}>
          <div className="form-group">
            <Field
              name="Comment"
              placeholder="Comment"
              component='textarea'
              className="form-control my-2"
            />
            <Field
              name="Name"
              placeholder="Name"
              component='input'
              className="form-control my-2"
              />
            <Field
              name="Email"
              placeholder="Email"
              component='input'
              className="form-control my-2"
              />
            <Field
              name="Website"
              placeholder="Website"
              component='input'
              className="form-control my-2"
              />
            <button type="submit" className="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { current: state.current }
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('createComment'));


export default reduxForm({
  form: 'createComment',
  onSubmitSuccess: afterSubmit
})(
  connect(mapStateToProps,{createComment})(CommentBox)
);
