import React, {PureComponent} from "react";

export const withLoginState = (Component) => {
  return class Login extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        userEmail: null,
        userPassword: null
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          handleFieldChange = {this.handleFieldChange}
          state = {this.state}
        />
      );
    }
  };
};


