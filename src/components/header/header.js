import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";

const Header = (props) => {
  const {
    children,
    className,
    withUserBlock,
    authorizationStatus,
    userAvatar,
  } = props;


  const renderUserBlock = () => (
    <div className="user-block">
      {(authorizationStatus === `AUTH`)
        ? (
          <div
            className="user-block__avatar"
            onClick={() => browserHistory.push(`/mylist`)}
          >
            <img
              src={userAvatar}
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        )
        : (
          <Link to="/login" className="user-block__link">
            Sign in
          </Link>
        )
      }
    </div>
  );

  return (
    <>
      <header className={`page-header ${className}`}>
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        {children}
        {withUserBlock && renderUserBlock()}
      </header>
    </>
  );
};

Header.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
  withUserBlock: PropTypes.bool,
  authorizationStatus: PropTypes.string,
  userAvatar: PropTypes.string,
  redirectTo: PropTypes.func
};

Header.defaultProps = {
  className: ``,
  withUserBlock: true,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.users.authorizationStatus,
    userAvatar: state.users.userAvatar
  };
};

export {Header};
export default connect(mapStateToProps)(Header);
