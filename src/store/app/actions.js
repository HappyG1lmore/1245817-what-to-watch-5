
export const ActionType = {
  SET_API_REQUEST_ERROR: `SET_API_REQUEST_ERROR`,
  CLEAR_ERROR: `CLEAR_ERROR`
};

export const setApiRequestError = () => {
  return {
    type: ActionType.SET_API_REQUEST_ERROR,
  };
};

