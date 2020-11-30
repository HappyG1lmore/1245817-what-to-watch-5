import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {clearError} from "../../store/ app/actions";
import PropTypes from "prop-types";

const ErrorAll = (props) => {
  const {clearErrorAction} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <h1 className="page-title user-page__title">
          <br/>
          Упс, ошибочка =( <br/>
          Мы уже ремонтируем. <br/>
          Жмите кнопку слева и выбирете пока кино.
        </h1>

        <div className="logo">
          <Link to="/" className="logo__link" onClick={clearErrorAction}>
            <span className="logo__letter logo__letter--1">Ж</span>
            <span className="logo__letter logo__letter--2">М</span>
            <span className="logo__letter logo__letter--3">И</span>
          </Link>
        </div>
      </header>
    </div>

  );
};


ErrorAll.propTypes = {
  clearErrorAction: PropTypes.any
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearErrorAction: () => dispatch(clearError()),
  };
};

export default connect(null, mapDispatchToProps)(ErrorAll);
