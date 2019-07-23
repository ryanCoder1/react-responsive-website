import { GET_SLIDE_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action){

  switch(action.type){
    case 'GET_SLIDE_POST':
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
