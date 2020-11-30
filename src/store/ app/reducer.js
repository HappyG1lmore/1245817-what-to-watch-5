import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  isApiRequestError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RECEIVED_AN_ERROR:
      return extend(state, {
        isApiRequestError: true,
      });
    case ActionType.CLEAR_ERROR:
      return extend(state, {
        isApiRequestError: false,
      });
  }
  return state;
};

export {reducer};
