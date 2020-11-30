import React from "react";

const ErrorScreen = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <h1 className="page-title user-page__title">
          Request error occurred, please try to reload the page
        </h1>

        <div className="logo">
          <div className="logo__link" >
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </div>
        </div>
      </header>
    </div>

  );
};

export default ErrorScreen;
