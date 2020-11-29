import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {createAPI} from "./services/api";
import reducer from "./store/root-reducer";
import {requireAuthorization} from "./store/users/actions";
import {AuthorizationStatus} from "./constants";
import {fetchFilms, checkAuth, getPromoFilm} from "./store/api-action";
import {redirect} from "./store/middlewares/redirect";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);


Promise.all([
  store.dispatch(fetchFilms()),
  store.dispatch(getPromoFilm()),
  store.dispatch(checkAuth()),
])
  .then(() => {
    ReactDom.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });


