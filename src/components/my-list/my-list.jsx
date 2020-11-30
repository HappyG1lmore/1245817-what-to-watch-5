import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import Header from "../header/header";
import {fetchFavoriteFilms} from "../../store/api-action";
import {resetFavoriteFilm} from "../../store/favorite-films/actions";
import {filmsListPropTypes} from "../../common-prop-types";

class MyList extends PureComponent {
  componentDidMount() {
    const {fetchFavoriteFilmsAction} = this.props;
    fetchFavoriteFilmsAction();
  }

  componentWillUnmount() {
    const {resetFavoriteFilmAction} = this.props;
    resetFavoriteFilmAction();
  }

  render() {
    const {favoriteFilms} = this.props;

    return (
      <div className="user-page">
        <Header className={`user-page__head`}>
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {favoriteFilms.map((film) => (
              <SmallMovieCard
                key={film.id}
                film={film}
              />
            ))}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteFilms: filmsListPropTypes,
  fetchFavoriteFilmsAction: PropTypes.func,
  resetFavoriteFilmAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    favoriteFilms: state.favoriteFilms.favoriteFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFavoriteFilmsAction: () => dispatch(fetchFavoriteFilms()),
    resetFavoriteFilmAction: () => dispatch(resetFavoriteFilm())
  };
};

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
