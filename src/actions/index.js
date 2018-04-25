import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const FETCH_COMMENTS = 'fetch_comments';
export const FETCH_COMMENT = 'fetch_comment';
export const CURRENT_COMMENTER = 'current_commenter';
export const CREATE_COMMENT = 'create_comment';


const ROOT_URL = 'http://u6f.f72.myftpupload.com/wp-json/wp/v2';


export function fetchPosts(page) {
  const request = axios.get(`${ROOT_URL}/posts?nocache=1&page=${page}&per_page=10`)

  return (dispatch) => {
    request.then((posts) => { dispatch({type: FETCH_POSTS , payload: posts})
    })
  }
}

export function fetchAllComments() {
  const request = axios.get(`${ROOT_URL}/comments?nocache=1&per_page=100`);
  return (dispatch) => {
    request.then((comment) => { dispatch({type: FETCH_COMMENTS , payload: comment})
    })
  }
}

export function fetchPostComments(id) {
  const commentRequest = axios.get(`${ROOT_URL}/comments?nocache=1&post=${id}&per_page=100`);
  return (dispatch) => {
    commentRequest.then((comment) => { dispatch({type: FETCH_COMMENT , payload: comment})
  })
 }
}


export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}?nocache=1`);
  return (dispatch) => {
    request.then((post) => {
      dispatch({
        type: FETCH_POST,
        payload: post
      })
    })
  }
}

export function createComment(value,commenter,id) {
  const values = {...value, ...commenter, ...id}
  const request = axios.post(`${ROOT_URL}/comments?author_name=${values.Name}&author_email=${values.Email}&content=${values.Comment}&parent=${values.commenter}&post=${values.id}`);
  return (dispatch) => {
    request.then((comment) => {
      dispatch({
        type: CREATE_COMMENT,
        payload: values
      })
    })
  }
}


export function currentCommenter(id) {
  return{
    type: CURRENT_COMMENTER,
    payload: id
  }
}
