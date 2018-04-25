import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import  PostsReducer from './reducer_posts';
import CommentsReducer from './reducer_comments';
import CurrentCommenter from './reducer_cc';



const rootReducer = combineReducers({
  posts: PostsReducer,
  comments: CommentsReducer,
  current: CurrentCommenter,
  form: formReducer

});

export default rootReducer;
