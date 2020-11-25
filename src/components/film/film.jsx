import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/header";
import Tabs from "../tabs/tabs";
import {getFilmInfo} from "../../store/api-action";

class Film extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      getFilmInformation,
      match: {
        params
      }
    } = this.props;
    const id = params.id;

    getFilmInformation(id);
  }

  render() {
    const {
      history,
      match,
      authorizationStatus
    } = this.props;
    const {params, url} = match;
    const {film} = this.props;

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
                      authorizationStatus === `AUTH` &&
                      <Link to={`${url}/review`} className="btn movie-card__button">Add review</Link>
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img src={film.poster} alt={film.title} width="218"
                    height="327"/>
                </div>

                <Tabs film={film}/>

              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <div className="catalog__movies-list">
                <article className="small-movie-card catalog__movies-card">
                  <div className="small-movie-card__image">
                    <img src={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
                      alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
                  </div>
                  <h3 className="small-movie-card__title">
                    <a className="small-movie-card__link" href={`movie-page.html`}>
                      Fantastic Beasts: The Crimes of Grindelwald
                    </a>
                  </h3>
                </article>

                <article className="small-movie-card catalog__movies-card">
                  <div className="small-movie-card__image">
                    <img src={`img/bohemian-rhapsody.jpg`} alt="Bohemian Rhapsody" width="280" height="175"/>
                  </div>
                  <h3 className="small-movie-card__title">
                    <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
                  </h3>
                </article>

                <article className="small-movie-card catalog__movies-card">
                  <div className="small-movie-card__image">
                    <img src={`img/macbeth.jpg`} alt="Macbeth" width="280" height="175"/>
                  </div>
                  <h3 className="small-movie-card__title">
                    <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
                  </h3>
                </article>

                <article className="small-movie-card catalog__movies-card">
                  <div className="small-movie-card__image">
                    <img src={`img/aviator.jpg`} alt="Aviator" width="280" height="175"/>
                  </div>
                  <h3 className="small-movie-card__title">
                    <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
                  </h3>
                </article>
              </div>
            </section>

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
  authorizationStatus: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    filmsList: state.films.filmsList,
    film: state.films.film,
    authorizationStatus: state.users.authorizationStatus
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    getFilmInformation: (id) => dispath(getFilmInfo(id)),
  };
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);

