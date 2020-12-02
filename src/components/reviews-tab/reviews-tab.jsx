import React from "react";
import {connect} from "react-redux";
import {REVIEWS_COLUMN_COUNT} from "../../constants";
import moment from "moment";
import PropTypes from "prop-types";

const ReviewsTab = (props) => {

  const {comments} = props;
  const commentsList = [comments.slice(0, REVIEWS_COLUMN_COUNT), comments.slice(REVIEWS_COLUMN_COUNT, REVIEWS_COLUMN_COUNT * 2)];

  return (
    <div className="movie-card__reviews movie-card__row">
      {commentsList && commentsList.map((reviewsColumn, idx) => (
        <div
          className="movie-card__reviews-col"
          key={idx}
        >
          {reviewsColumn.map((review) => (
            <div className="review" key={review.id}>
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time
                    className="review__date"
                    dateTime={`${moment(review.date).format(`YYYY-MMMM-DD`)}`}
                  >
                    {moment(review.date).format(`MMMM DD, YYYY`)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">
                {String(review.rating).replace(`.`, `,`)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

ReviewsTab.propTypes = {
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string,
        date: PropTypes.string,
        id: PropTypes.number,
        rating: PropTypes.number,
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      }))
};

const mapStateToProps = (state) => {
  return {
    comments: state.reviews.comments
  };
};

export {ReviewsTab};
export default connect(mapStateToProps)(ReviewsTab);
