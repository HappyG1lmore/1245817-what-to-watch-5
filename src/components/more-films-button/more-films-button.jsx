import React from "react";
import PropTypes from "prop-types";

const MoreFilmsButton = (props) => {
  const {handleClick} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleClick}>
        Show more
      </button>
    </div>
  );
};

MoreFilmsButton.propTypes = {
  handleClick: PropTypes.func
};

export default MoreFilmsButton;
