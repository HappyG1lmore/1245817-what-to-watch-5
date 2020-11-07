import React from "react";
import PropTypes from "prop-types";
import {filmsListPropTypes} from "../../common-prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "./../main/main";
import SignIn from "./../sign-in/sign-in";
import MyList from "./../my-list/my-list";
import Film from "./../film/film";
import AddReview from "./../add-review/add-review";
import Player from "./../player/player";
import {fetchFilms} from "../../store/action";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {getFilms} = this.props;
    getFilms();
  }

  render() {
    const {mainFilm, isFilmsFetching, filmsList} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main mainFilm={mainFilm} isFilmsFetching={isFilmsFetching}/>
            )}
          />
          <Route exact path="/login">
            <SignIn/>
          </Route>
          <Route
            exact
            path="/mylist"
            render={() => (
              <MyList filmsList={filmsList}/>
            )}
          />
          <Route
            exact
            path="/films/:id?"
            render={(routerProps) => (
              <Film routerProps={routerProps} filmsList={filmsList}/>
            )}
          />
          <Route exact path="/player/:id?">
            <Player/>
          </Route>
          <Route exact path="/films/:id/review" component={AddReview}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFilmsFetching: state.isFilmsFetching,
    filmsList: state.filmsList
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    getFilms: () => dispath(fetchFilms()),
  };
};

App.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
  }),
  getFilms: PropTypes.func,
  isFilmsFetching: PropTypes.bool,
  filmsList: filmsListPropTypes
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
