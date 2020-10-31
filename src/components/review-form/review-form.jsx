import React from "react";
import PropTypes from "prop-types";
import {withAddReview} from "../../hocs/with-add-review-state";

const ReviewForm = (props) => {
  const {handleSubmit, handleFieldChange} = props;
  return (
    <div className="add-review">
      <form className="add-review__form"
        onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2"
              onChange={handleFieldChange}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3"
              onChange={handleFieldChange}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4"
              onChange={handleFieldChange}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5"
              onChange={handleFieldChange}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="reviewText" id="review-text"
            placeholder="Review text" onChange={handleFieldChange}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default withAddReview(ReviewForm);

ReviewForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleFieldChange: PropTypes.func,
};
