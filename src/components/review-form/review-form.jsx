import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {withAddReviewState} from "../../hocs/with-add-review-state";
import {connect} from "react-redux";
import {ReviewsLength, REVIEW_FORM_RATINGS} from "../../constants";

const ReviewForm = (props) => {
  const {
    onHandleSubmit,
    onFieldChange,
    isUploading,
    comment,
    rating,
  } = props;

  const isFormValid = (() => (
    Boolean(rating) && comment.length > ReviewsLength.MIN && comment.length < ReviewsLength.MAX
  ))();

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={onHandleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {REVIEW_FORM_RATINGS.map((ratingScore) => (
              <Fragment key={ratingScore}>
                <input
                  checked={ratingScore === rating}
                  className="rating__input"
                  disabled={isUploading}
                  id={`star-${ratingScore}`}
                  type="radio"
                  name="rating"
                  value={ratingScore}
                  onChange={onFieldChange}
                />
                <label
                  className="rating__label"
                  htmlFor={`star-${ratingScore}`}
                >
                  Rating {ratingScore}
                </label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text"
            placeholder="Review text" onChange={onFieldChange} disabled={isUploading}/>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              disabled={isUploading || !isFormValid}
              type="submit"
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  onFieldChange: PropTypes.func,
  isUploading: PropTypes.bool,
  comment: PropTypes.string,
  rating: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    isUploading: state.userReview.isUploading
  };
};

export {ReviewForm};
export default withAddReviewState(connect(mapStateToProps)(ReviewForm));
