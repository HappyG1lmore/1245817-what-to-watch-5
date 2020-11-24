
export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER_AVATAR: `GET_USER_AVATAR`,
};

export const requireAuthorization = (status) => {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  };
};

export const getUserAvatar = (url) => {
  return {
    type: ActionType.GET_USER_AVATAR,
    payload: url,
  };
};


