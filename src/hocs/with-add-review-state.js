import React, {PureComponent} from "react";

export const withAddReviewState = (Component) => {
  return class AddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        reviewText: null
      };

      this.onHandleSubmit = this.onHandleSubmit.bind(this);
      this.onHandleFieldChange = this.onHandleFieldChange.bind(this);
    }

    onHandleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    onHandleSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      return <Component
        {...this.props}
        onHandleSubmit = {this.handleSubmit}
        onHandleFieldChange = {this.onHandleFieldChange}
      />;
    }
  };
};
