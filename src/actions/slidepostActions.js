import { GET_SLIDE_POSTS } from 'types';
import axios from 'axios';


export const getSlidePosts = (dispatch) => {
   axios.get('https://jsonplaceholder.typicode.com/todos')
   .then(res => {dispatch(createPostSuccess(res.data))
   })
   .error(error => {
     throw(error);
   });
}

export const createPostSuccess = (data) => {
    return {
      type: GET_SLIDE_POSTS,
      payload: data
    }
}
