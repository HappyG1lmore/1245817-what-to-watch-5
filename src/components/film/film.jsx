import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import Tabs from "../tabs/tabs";
import LikeThis from "../../components/like-this/like-this";
import {getComments, getFilmInfo} from "../../store/api-action";
import {clearFilmInfo} from "../../store/film/actions";
import {clearComments} from "../../store/reviews/actions";
import FavoriteButton from "../favorite-button/favorite-button";

class Film extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      getFilmInformation,
      getCommentsList,
      match: {params: {id}}
    } = this.props;

    getFilmInformation(id);
    getCommentsList(id);
  }

  componentDidUpdate(prevProps) {
    const {match: {params: {id: prevId}}} = prevProps;
    const {
      match: {params: {id}},
      getFilmInformation,
      getCommentsList
    } = this.props;

    if (prevId !== id) {
      getFilmInformation(id);
      getCommentsList(id);
    }
  }

  componentWillUnmount() {
    const {clearFilm, clearReviews} = this.props;
    clearFilm();
    clearReviews();
  }

  render() {
    const {
      film,
      history,
      match: {params, url},
      authorizationStatus
    } = this.props;

    return (
      film ?
        <React.Fragment>
          <section
            className="movie-card movie-card--full"
            style={{backgroundColor: `${film.backgroundColor}`}}
          >
            <div className="movie-card__hero">
              <div className="movie-card__bg">
                <img src={film.background} alt={film.title}/>
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <Header className={`movie-card__head`}/>

              <div className="movie-card__wrap">
                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{film.title}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{film.genre}</span>
                    <span className="movie-card__year">{film.year}</span>
                  </p>

                  <div className="movie-card__buttons">
                    <button className="btn btn--play movie-card__button" type="button"
                      onClick={() => {
                        history.push(`/player/${params.id}`);
                      }}>
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"/>
                      </svg>
                      <span>Play</span>
                    </button>
                    <FavoriteButton
                      isFavorite={film.isFavorite}
                      id={film.id}
                    />
                    {
                      authorizationStatus === `AUTH`
                      &&
                      <Link to={`${url}/review`} className="btn movie-card__button">Add review</Link>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img
                    src={film.poster}
                    alt={film.title}
                    width="218"
                    height="327"
                  />
                </div>

                <Tabs film={film}/>

              </div>
            </div>
          </section>

          <div className="page-content">

            <LikeThis
              genre={film.genre}
              id={film.id}
            />

            <Footer />
          </div>
        </React.Fragment>
        :
        <h2>film is loading</h2>
    );
  }
}

Film.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  params: PropTypes.object,
  url: PropTypes.string,
  getFilmInformation: PropTypes.func,
  film: PropTypes.object,
  authorizationStatus: PropTypes.string,
  clearFilm: PropTypes.func,
  getCommentsList: PropTypes.func,
  clearReviews: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    film: state.film.film,
    authorizationStatus: state.users.authorizationStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilmInformation: (id) => dispatch(getFilmInfo(id)),
    getCommentsList: (id) => dispatch(getComments(id)),
    clearFilm: () => dispatch(clearFilmInfo()),
    clearReviews: () => dispatch(clearComments()),
  };
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
