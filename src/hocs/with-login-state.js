import React, {PureComponent} from "react";

export const withLoginState = (Component) => {
  return class Login extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        userEmail: null,
        userPassword: null
      };

      this.onHandleFieldChange = this.onHandleFieldChange.bind(this);
    }

    onHandleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onHandleFieldChange = {this.onHandleFieldChange}
          userEmail = {this.state.userEmail}
          userPassword = {this.state.userPassword}
        />
      );
    }
  };
};


