import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {uploadReview} from "../store/api-action";

export const withAddReviewState = (Component) => {
  class AddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        reviewText: ``
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    handleSubmit(evt) {
      evt.preventDefault();
      const {loadReview, id} = this.props;
      loadReview(
          {rating: this.state.rating,
            comment: this.state.reviewText},
          id);
    }

    render() {
      return <Component
        {...this.props}
        onHandleSubmit = {this.handleSubmit}
        onHandleFieldChange = {this.handleFieldChange}
        comment = {this.state.reviewText}
        rating = {this.state.rating}
      />;
    }
  }

  AddReview.propTypes = {
    loadReview: PropTypes.func,
    id: PropTypes.string
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      loadReview: (review, id) => dispatch(uploadReview(review, id))
    };
  };

  return connect(null, mapDispatchToProps)(AddReview);
};
