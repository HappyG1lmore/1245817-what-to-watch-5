import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isCommentsFetching: true,
  comments: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMMENTS:
      return extend(state, {
        isCommentsFetching: false,
        comments: action.payload,
      });
    case ActionType.CLEAR_COMMENTS:
      return extend(state, {
        isCommentsFetching: true,
        comments: null,
      });
  }
  return state;
};

export {reducer};

