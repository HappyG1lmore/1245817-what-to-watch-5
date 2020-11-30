import React from "react";
import {connect} from "react-redux";
import {FavoriteStatus} from "../../constants";
import {toggleFavorite} from "../../store/api-action";
import PropTypes from "prop-types";

const AddIcon = () => (
  <svg viewBox="0 0 19 20" width="19" height="20">
    <use xlinkHref="#add"/>
  </svg>
);

const InListIcon = () => (
  <svg viewBox="0 0 18 14" width="18" height="14">
    <use xlinkHref="#in-list"/>
  </svg>
);

const FavoriteButton = (props) => {
  const {id, isFavorite, isToggling, toggleFavoriteAction} = props;

  const handleClick = () => {
    toggleFavoriteAction(id, isFavorite
      ? FavoriteStatus.FALSE
      : FavoriteStatus.TRUE
    );
  };

  return (
    <button
      className="btn btn--list movie-card__button"
      type="button"
      disabled={isToggling}
      onClick={handleClick}
    >
      {isFavorite ? <InListIcon /> : <AddIcon />}
      <span>My list</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.number,
  isFavorite: PropTypes.bool,
  isToggling: PropTypes.bool,
  toggleFavoriteAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    isToggling: state.favoriteFilms.isUploadingFavorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavoriteAction: (id, status) => dispatch(toggleFavorite(id, status))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
