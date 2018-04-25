import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function(state= {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      const postsObject = {};
      const data = action.payload.data;
      data.map(post => postsObject[post.id] = post);
      return postsObject
    case FETCH_POST:
        return { ...state, [action.payload.data.id]: action.payload.data};
    default:
      return state
  }
}
