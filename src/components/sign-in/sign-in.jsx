import React from "react";
import PropTypes from "prop-types";
import {withLoginState} from "../../hocs/with-login-state";
import {Link} from "react-router-dom";
import {login} from "../../store/users/actions";
import {connect} from "react-redux";
import Header from "../header/header";
import {Redirect} from "react-router-dom";

const SignIn = (props) => {
  const {
    onHandleFieldChange,
    loginAction,
    userPassword,
    userEmail,
    authorizationStatus
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

      <footer className="page-footer">
        <div className="logo">
          <Link to={`/`} className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignIn.propTypes = {
  onHandleFieldChange: PropTypes.func,
  loginAction: PropTypes.func,
  authorizationStatus: PropTypes.string,
  userPassword: PropTypes.string,
  userEmail: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.users.authorizationStatus
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    loginAction: (email, password) => dispath(login(email, password)),
  };
};

export {SignIn};
export default connect(mapStateToProps, mapDispatchToProps)(withLoginState(SignIn));
