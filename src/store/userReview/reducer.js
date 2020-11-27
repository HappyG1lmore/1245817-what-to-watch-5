import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isUploading: false,
  errorLoading: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPLOAD_REVIEW:
      return extend(state, {
        errorLoading: null,
        isUploading: true,
      });
    case ActionType.UPLOAD_REVIEW_COMPLETE:
      return extend(state, {
        errorLoading: action.payload,
        isUploading: false,
      });
  }
  return state;
};

export {reducer};

