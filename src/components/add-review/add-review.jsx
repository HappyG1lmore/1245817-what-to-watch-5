import React from "react";
import {Link} from "react-router-dom";
import ReviewForm from "../../components/review-form/review-form";
import Header from "../header/header";
import {connect} from "react-redux";
import {filmsListPropTypes} from "../../common-prop-types"
import PropTypes from "prop-types";

const AddReview = (props) => {
  const {filmsList} = props;
  const {params} = props.match;
  const film = filmsList.find(({id}) => id === Number(params.id));

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.background}
            alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className={`breadcrumbs`}>
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${params.id}`}
                  className="breadcrumbs__link">
                  {film.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.poster}
            alt={`${film.title}`} width="218"
            height="327"/>
        </div>
      </div>

      <ReviewForm id={params.id}/>

    </section>

  );
};

AddReview.propTypes = {
  filmsList: filmsListPropTypes,
  params: PropTypes.object,
  match: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    filmsList: state.films.filmsList,
  };
};

export {AddReview};
export default connect(mapStateToProps)(AddReview);
