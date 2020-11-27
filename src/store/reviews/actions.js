
export const ActionType = {
  GET_COMMENTS: `GET_COMMENTS`,
  CLEAR_COMMENTS: `CLEAR_COMMENTS`
};

export const onCommentsFetchSuccess = (comments) => {
  return {
    type: ActionType.GET_COMMENTS,
    payload: comments,
  };
};

export const clearComments = () => {
  return {
    type: ActionType.CLEAR_COMMENTS,
  };
};
