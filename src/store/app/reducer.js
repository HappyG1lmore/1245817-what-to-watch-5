import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isApiRequestError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_API_REQUEST_ERROR:
      return extend(state, {
        isApiRequestError: true,
      });
  }
  return state;
};

export {reducer};
