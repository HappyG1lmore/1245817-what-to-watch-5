
export const ActionType = {
  UPLOAD_REVIEW: `UPLOAD_REVIEW`,
  UPLOAD_REVIEW_COMPLETE: `UPLOAD_REVIEW_COMPLETE`,
  UPLOAD_REVIEW_ERROR: `UPLOAD_REVIEW_ERROR`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const uploadReviewStart = () => {
  return {
    type: ActionType.UPLOAD_REVIEW,
  };
};

export const uploadReviewComplete = (err) => {
  return {
    type: ActionType.UPLOAD_REVIEW_COMPLETE,
    payload: err,
  };
};

export const redirectToRoute = (url) => {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  };
};
