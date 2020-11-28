import React from "react";
import PropTypes from "prop-types";

const MoreFilmsButton = (props) => {
  const {onClick, isVisible} = props;

  return (
    isVisible &&
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>
        Show more
      </button>
    </div>
  );
};

MoreFilmsButton.propTypes = {
  onClick: PropTypes.func,
  isVisible: PropTypes.bool
};

export default MoreFilmsButton;
