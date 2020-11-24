import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import Main from "./../main/main";
import SignIn from "./../sign-in/sign-in";
import MyList from "./../my-list/my-list";
import Film from "./../film/film";
import PrivateRoute from "../private-route/private-route";
import AddReview from "./../add-review/add-review";
import Player from "./../player/player";
import browserHistory from "../../browser-history";

const App = (props) => {

  const {mainFilm} = props;
  return (
    <BrowserRouter history={browserHistory}>
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

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
  }),
  fetchFilmsAction: PropTypes.func,
};

export default App;
