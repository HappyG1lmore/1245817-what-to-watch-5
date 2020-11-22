import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {
    children,
    className,
    withUserBlock,
    authorizationStatus,
  } = props;

  Header.defaultProps = {
    className: ``,
    withUserBlock: true,
  };

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
      <div className="user-block">
        {
          withUserBlock
            ?
            (authorizationStatus === `AUTH`)
        &&
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
          ||
          <Link to="/login" className="user-block__link">
            Sign in
          </Link>
            : ``
        }

      </div>
    </header>
    </>
  );
};

Header.propTypes = {
  params: PropTypes.object,
  children: PropTypes.object,
  className: PropTypes.string,
  withUserBlock: PropTypes.bool,
  authorizationStatus: PropTypes.string,
};

export default Header;
