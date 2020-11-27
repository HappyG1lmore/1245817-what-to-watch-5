import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isUploading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPLOAD_REVIEW:
      return extend(state, {
        isUploading: true,
      });
    case ActionType.UPLOAD_REVIEW_COMPLETE:
      return extend(state, {
        isUploading: false,
      });
  }
  return state;
};

export {reducer};

