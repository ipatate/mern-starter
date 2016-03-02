import { combineReducers } from 'redux';
import post from './post.js';
import posts from './posts.js';
const reducer = combineReducers({
  post,
  posts,
});
export default reducer;
