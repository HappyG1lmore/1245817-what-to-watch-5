import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Tabs from "../tabs/tabs";
import LikeThis from "../../components/like-this/like-this";
import {getComments, getFilmInfo} from "../../store/api-action";
import {clearFilmInfo} from "../../store/film/actions";
import {clearComments} from "../../store/reviews/actions";

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
    const {match: {params: {id}}, getFilmInformation} = this.props

    if (prevId !== id) {
      getFilmInformation(id);
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
                    <button className="btn btn--list movie-card__button" type="button">
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"/>
                      </svg>
                      <span>My list</span>
                    </button>
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

            <footer className="page-footer">
              <div className="logo">
                <Link to={`/`} className="logo__link logo__link--light">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              <div className="copyright">
                <p>© 2019 What to watch Ltd.</p>
              </div>
            </footer>
          </div>
        </React.Fragment>
        :
        <h2>Film with url: app{url} not found</h2>
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
  comments: PropTypes.array,
  clearReviews: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    film: state.film.film,
    authorizationStatus: state.users.authorizationStatus
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    getFilmInformation: (id) => dispath(getFilmInfo(id)),
    getCommentsList: (id) => dispath(getComments(id)),
    clearFilm: () => dispath(clearFilmInfo()),
    clearReviews: () => dispath(clearComments()),
  };
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
