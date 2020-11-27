import React from "react";
import PropTypes from "prop-types";
import {withAddReviewState} from "../../hocs/with-add-review-state";
import {connect} from "react-redux";

const ReviewForm = (props) => {
  const {
    onHandleSubmit,
    onHandleFieldChange,
    isUploading,
    comment,
    rating,
  } = props;

  const isFormValid = (() => (
    Boolean(rating) && comment.length > 50 && comment.length < 400
  ))();

  return (
    <div className="add-review">
      <form className="add-review__form" onSubmit={onHandleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
              onChange={onHandleFieldChange}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
              onChange={onHandleFieldChange}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
              onChange={onHandleFieldChange}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
              onChange={onHandleFieldChange}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text"
            placeholder="Review text" onChange={onHandleFieldChange}/>
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
  onHandleFieldChange: PropTypes.func,
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
