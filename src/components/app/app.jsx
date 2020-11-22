import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "./../main/main";
import SignIn from "./../sign-in/sign-in";
import MyList from "./../my-list/my-list";
import Film from "./../film/film";
import PrivateRoute from "../private-route/private-route";
import AddReview from "./../add-review/add-review";
import Player from "./../player/player";
import {fetchFilms} from "../../store/films/actions";

class App extends PureComponent {

  componentDidMount() {
    const {fetchFilmsAction} = this.props;
    fetchFilmsAction();
  }

  render() {
    const {mainFilm} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <Main mainFilm={mainFilm} />
          )}/>
          <Route exact path="/login"> <SignIn/> </Route>
          <PrivateRoute
            exact
            path={`/mylist`}
            render={() => <MyList />}
          />
          <Route exact path="/films/:id?" component={Film}/>
          <Route exact path="/player/:id?" component={Player}/>
          <PrivateRoute
            exact
            path={`/films/:id/review`}
            render={(routerProps) => <AddReview {...routerProps} />}
          />

        </Switch>/films/:id/review
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    fetchFilmsAction: () => dispath(fetchFilms()),
  };
};

App.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
  }),
  login: PropTypes.func,
  fetchFilmsAction: PropTypes.func,
  authorizationStatus: PropTypes.bool
};

export {App};
export default connect(null, mapDispatchToProps)(App);
