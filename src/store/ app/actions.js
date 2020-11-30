
export const ActionType = {
  RECEIVED_AN_ERROR: `RECEIVED_AN_ERROR`,
  CLEAR_ERROR: `CLEAR_ERROR`
};

export const onAnyOtherError = () => {
  return {
    type: ActionType.RECEIVED_AN_ERROR,
  };
};

export const clearError = () => {
  return {
    type: ActionType.CLEAR_ERROR,
  };
};

