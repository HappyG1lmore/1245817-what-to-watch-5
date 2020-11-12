import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import {api} from "./api";
import reducer from "./store/root-reducer";
import {checkAuth} from "./store/users/actions";

const movie1 = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

const composeEnhancers = (typeof window !== `undefined` && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App mainFilm={movie1} />,
    </Provider>,
    document.querySelector(`#root`)
);

