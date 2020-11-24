import React from "react";
import {connect} from "react-redux";
import {filmsListPropTypes} from "../../common-prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import Header from "../header/header";
import PropTypes from "prop-types";

const MyList = (props) => {
  const {filmsList} = props;

  return (
    <div className="user-page">
      <Header className={`user-page__head`}>
        <h1 className="page-title user-page__title">My list</h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          <article className="small-movie-card catalog__movies-card">
            <div className="small-movie-card__image">
              <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
            </div>
            <h3 className="small-movie-card__title">
              <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of
                Grindelwald</a>
            </h3>
          </article>
          {filmsList.map((film) => (
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
};

MyList.propTypes = {
  filmsList: filmsListPropTypes,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    filmsList: state.films.filmsList,
  };
};

export {MyList};
export default connect(mapStateToProps)(MyList);
