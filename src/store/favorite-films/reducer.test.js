import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType as FavoriteActionType} from './actions';
import {ActionType as FilmActionType} from '../film/actions';
import {fetchFavoriteFilms, toggleFavorite} from '../api-action';
import {reducer} from './reducer';
import {APIRoute, FavoriteStatus, HttpCode} from '../../constants';
import {films, filmsRaw, noop} from '../../test-data';

const api = createAPI(noop, noop);

const initialStateMock = {
  isFavoriteFilmsFetching: true,
  favoriteFilms: [],
  isUploadingFavorite: false,
};

describe(`Favorite-films reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On favorite list reset`, () => {
    expect(reducer(initialStateMock, {
      type: FavoriteActionType.RESET_FAVORITE_FILMS,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          favoriteFilms: [],
          isFavoriteFilmsFetching: true,
        }
    ));
  });

  it(`On favorite films fetch success`, () => {
    expect(reducer(initialStateMock, {
      type: FavoriteActionType.FETCH_FAVORITE_FILMS_SUCCESS,
      payload: films,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          favoriteFilms: films,
          isFavoriteFilmsFetching: false,
        }
    ));
  });

  it(`On favorite film toggle start`, () => {
    expect(reducer(initialStateMock, {
      type: FavoriteActionType.UPLOAD_FAVORITE_FILM,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isUploadingFavorite: true,
        }
    ));
  });

  it(`On favorite film toggle complete`, () => {
    expect(reducer(initialStateMock, {
      type: FavoriteActionType.UPLOAD_FAVORITE_FILM_COMPLETE,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isUploadingFavorite: false,
        }
    ));
  });

  it(`On favorite list load`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = fetchFavoriteFilms();

    apiMock
      .onGet(APIRoute.FAVORITE)
      .reply(HttpCode.OK, filmsRaw);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FavoriteActionType.FETCH_FAVORITE_FILMS_SUCCESS,
          payload: films,
        });
      });
  });

  it(`On favorite film toggle`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = toggleFavorite(filmsRaw[1].id, FavoriteStatus.TRUE);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${films[1].id}/${FavoriteStatus.TRUE}`)
      .reply(HttpCode.OK, films[1]);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FavoriteActionType.UPLOAD_FAVORITE_FILM,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: FavoriteActionType.UPLOAD_FAVORITE_FILM_COMPLETE,
        });
      });
  });

  it(`On favorite film toggle at film page`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => ({
      film: {
        film: films[1],
        promoFilm: films[2],
      }
    });
    const request = toggleFavorite(films[1].id, FavoriteStatus.TRUE);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${films[1].id}/${FavoriteStatus.TRUE}`)
      .reply(HttpCode.OK, filmsRaw[1]);

    return request(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FavoriteActionType.UPLOAD_FAVORITE_FILM,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: FavoriteActionType.UPLOAD_FAVORITE_FILM_COMPLETE,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: FilmActionType.FETCH_FILM_INFO_SUCCESS,
          payload: films[1]
        });
      });
  });

  it(`On favorite promo film toggle at film page`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = () => ({
      film: {
        film: films[1],
        promoFilm: films[1],
      }
    });
    const request = toggleFavorite(films[1].id, FavoriteStatus.TRUE);

    apiMock
      .onPost(`${APIRoute.FAVORITE}/${films[1].id}/${FavoriteStatus.TRUE}`)
      .reply(HttpCode.OK, filmsRaw[1]);

    return request(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: FavoriteActionType.UPLOAD_FAVORITE_FILM,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: FavoriteActionType.UPLOAD_FAVORITE_FILM_COMPLETE,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: FilmActionType.FETCH_FILM_INFO_SUCCESS,
          payload: films[1]
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: FilmActionType.FETCH_FILM_PROMO_SUCCESS,
          payload: films[1]
        });
      });
  });
});
