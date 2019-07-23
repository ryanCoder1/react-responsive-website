import { combineReducers } from 'redux';
import postReducer from './postReducers';

export default combineReducers({
    slide_posts: postReducer
});
