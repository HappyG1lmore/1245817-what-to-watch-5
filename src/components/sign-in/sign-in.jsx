import React from "react";
import PropTypes from "prop-types";
import {withLoginState} from "../../hocs/with-login-state";
import {login} from "../../store/api-action";
import {connect} from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import {Redirect} from "react-router-dom";

const SignIn = (props) => {
  const {
    onHandleFieldChange,
    loginAction,
    userPassword,
    userEmail,
    authorizationStatus,
    isLoginBadRequest
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginAction(userEmail, userPassword);
  };

  if (authorizationStatus === `AUTH`) {
    return <Redirect to="/" />;
  }

  return (
    <div className="user-page">
      <Header
        className={`user-page__head`}
        withUserBlock={false}
      >
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          { isLoginBadRequest &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>

          }
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="userEmail"
                id="userEmail" onChange={onHandleFieldChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="userPassword"
                id="userPassword" onChange={onHandleFieldChange}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onHandleFieldChange: PropTypes.func,
  loginAction: PropTypes.func,
  authorizationStatus: PropTypes.string,
  userPassword: PropTypes.string,
  userEmail: PropTypes.string,
  isLoginBadRequest: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.users.authorizationStatus,
    isLoginBadRequest: state.users.isLoginBadRequest,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (email, password) => dispatch(login(email, password)),
  };
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(withLoginState(SignIn));
