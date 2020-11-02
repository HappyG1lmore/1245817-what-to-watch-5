import React, {PureComponent} from "react";

export const withAddReviewState = (Component) => {
  return class AddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        reviewText: null
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
    }

    render() {
      return <Component
        {...this.props}
        handleSubmit = {this.handleSubmit}
        handleFieldChange = {this.handleFieldChange}
      />;
    }
  };
};
