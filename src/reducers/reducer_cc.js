import { CURRENT_COMMENTER } from '../actions';

export default function(state= { commenter: 0 }, action) {
  switch(action.type) {
    case CURRENT_COMMENTER:
      let idObj = { commenter: action.payload }
      return idObj;
    default:
      return state
  }
}
