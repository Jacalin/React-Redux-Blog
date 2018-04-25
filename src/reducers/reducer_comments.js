import { FETCH_COMMENTS } from '../actions';
import { FETCH_COMMENT } from '../actions';

export default function(state= {}, action) {
  switch(action.type) {
    case FETCH_COMMENTS:

      const data = action.payload.data;
      const commentsObject = {}

      data.forEach((commentParent) => {
        let tempObject = {};
        commentsObject[commentParent.post] = tempObject
        data.forEach((commentChild) => {
          if(commentChild.post === commentParent.post) return tempObject[commentChild.id] = commentChild
        })
      })
      return commentsObject
    case FETCH_COMMENT:
        const singleData = action.payload.data;
        const singleCommentsObject = {}

        singleData.forEach((commentParent) => {
          let tempObject = {};
          singleCommentsObject[commentParent.post] = tempObject
          singleData.forEach((commentChild) => {
            if(commentChild.post === commentParent.post) return tempObject[commentChild.id] = commentChild
          })
        })

      return { ...state, ...singleCommentsObject};
    default:
      return state
  }
}
