import {authorizationStatus} from "../../constants";

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

export const requireAuthorization = (status) => {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

export const checkAuth = () => {
  return (dispatch, getState, api) => {
    api.authorization()
      .then(() => {
        dispatch(requireAuthorization(authorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  };
};

export const login = () => {
  return (dispatch, getState, api) => {
    api.sendUserData()
      .then(() => {
        dispatch(requireAuthorization(authorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  };
};

