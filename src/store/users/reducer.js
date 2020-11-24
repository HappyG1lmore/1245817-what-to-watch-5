import {extend} from "../../utils";
import {ActionType} from "./actions";
import {AuthorizationStatus} from "../../constants";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_USER_AVATAR:
      return extend(state, {
        userAvatar: action.payload,
      });
  }
  return state;
};

export {reducer};
