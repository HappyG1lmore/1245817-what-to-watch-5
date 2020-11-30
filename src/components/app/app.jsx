import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import Main from "./../main/main";
import SignIn from "./../sign-in/sign-in";
import MyList from "./../my-list/my-list";
import Film from "./../film/film";
import PrivateRoute from "../private-route/private-route";
import AddReview from "./../add-review/add-review";
import ErrorScreen from "../error-screen/error-screen";
import Player from "./../player/player";
import browserHistory from "../../browser-history";
import {getPromoFilm} from "../../store/api-action";
import {checkAuth} from "../../store/api-action";

class App extends PureComponent {
  componentDidMount() {
    this.props.checkAuthAction();
  }

  componentDidUpdate(prevProps) {
    const {getPromoFilmAction} = this.props;
    if (prevProps.authorizationStatus !== this.props.authorizationStatus) {
      getPromoFilmAction();
    }
  }

  render() {

    const {isApiRequestError} = this.props;

    if (isApiRequestError) {
      return <ErrorScreen />;
    }

    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact path="/" render={() => (
            <Main/>
          )}/>
          <Route exact path="/login"> <SignIn /> </Route>
          <PrivateRoute
            exact
            path={`/mylist`}
            render={() => <MyList/>}
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
  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string,
  getPromoFilmAction: PropTypes.func,
  isApiRequestError: PropTypes.bool,
  checkAuthAction: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: state.users.authorizationStatus,
    isApiRequestError: state.app.isApiRequestError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPromoFilmAction: () => dispatch(getPromoFilm()),
    checkAuthAction: () => dispatch(checkAuth())
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
