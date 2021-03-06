import * as ActionTypes from '../constants/constants';

const initialState = null;

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SELECTED_POST :
      return action.slug;
    case ActionTypes.ADD_SELECTED_POST :
      return action.post;
    default:
      return state;
  }
};

export default postReducer;
