import {extend} from "../../utils";
import {ActionType} from "../../actions";
import {authorizationStatus} from "../../constants";

const AUTHORIZE_STATUS = {
  NO_AUTH: NO_AUTH,
  AUTH: AUTH
};

const initialState = {
  authorizationStatus: authorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};
