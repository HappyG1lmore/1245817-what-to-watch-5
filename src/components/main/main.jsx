import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmsListPropTypes} from "../../common-prop-types";
import {connect} from "react-redux";
import GenresList from "../genres-list/genres-list";
import FilmsList from "../films-list/films-list";
import Header from "../header/header";
import Footer from "../footer/footer";
import MoreFilmsButton from "../more-films-button/more-films-button";
import {filteredFilmsSelector, genresFilterSelector} from "../../store/selectors";
import {MAX_AMOUNT_FILMS_PER_STEP} from "../../constants";
import {filmPropTypes} from "../../common-prop-types";
import FavoriteButton from "../favorite-button/favorite-button";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      amountFilmsForRender: MAX_AMOUNT_FILMS_PER_STEP,
    };
    this.handleClickBtnShowMore = this.handleClickBtnShowMore.bind(this);
  }

  handleClickBtnShowMore() {
    let {amountFilmsForRender} = this.state;
    amountFilmsForRender += MAX_AMOUNT_FILMS_PER_STEP;
    this.setState({amountFilmsForRender});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filteredFilms !== this.props.filteredFilms) {
      this.setState({
        amountFilmsForRender: MAX_AMOUNT_FILMS_PER_STEP
      });
    }
  }

  render() {
    const {
      filteredFilms,
      filmsGenres,
      mainFilm,
      history
    } = this.props;

    const {amountFilmsForRender} = this.state;
    const filmsToRender = filteredFilms.slice(0, amountFilmsForRender);
    const isShowMoreVisible = amountFilmsForRender < filteredFilms.length;

    return (
      <>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img
              src={mainFilm.background}
              alt={mainFilm.title}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            className={`movie-card__head`}
          />

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img
                  src={mainFilm.poster}
                  alt="The Grand Budapest Hotel poster"
                  width="218"
                  height="327"
                />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{mainFilm.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{mainFilm.genre}</span>
                  <span className="movie-card__year">{mainFilm.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button"
                    onClick={() => {
                      history.push(`/player/${mainFilm.id}`);
                    }}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                  <FavoriteButton
                    isFavorite={mainFilm.isFavorite}
                    id={mainFilm.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              <GenresList filmGenres={filmsGenres}/>
            </ul>

            <div className="catalog__movies-list">
              <FilmsList filmsList={filmsToRender}/>
            </div>

            <MoreFilmsButton
              onClick={this.handleClickBtnShowMore}
              isVisible={isShowMoreVisible}
            />

          </section>

          <Footer />
        </div>
      </>
    );
  }
}

Main.propTypes = {
  mainFilm: filmPropTypes,
  filteredFilms: filmsListPropTypes,
  filmsGenres: PropTypes.arrayOf(PropTypes.string),
  history: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    filteredFilms: filteredFilmsSelector(state.films),
    filmsGenres: genresFilterSelector(state.films),
    mainFilm: state.film.promoFilm
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
