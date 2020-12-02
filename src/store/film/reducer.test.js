import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './actions';
import {getFilmInfo, getPromoFilm} from '../api-action';
import {reducer} from './reducer';
import {APIRoute, HttpCode} from '../../constants';
import {films, filmsRaw, noop} from '../../test-data';

const api = createAPI(noop, noop);

const initialStateMock = {
  isFilmInfoFetching: true,
  film: null,
  promoFilm: null
};

describe(`Film reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On film reset`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.CLEAR_FILM_INFO,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          film: null,
          isFilmInfoFetching: true,
        }
    ));
  });

  it(`On fetch film success`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.FETCH_FILM_INFO_SUCCESS,
      payload: films[2],
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          film: films[2],
          isFilmInfoFetching: false,
        }
    ));
  });

  it(`On fetch promo film success`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.FETCH_FILM_PROMO_SUCCESS,
      payload: films[2],
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          promoFilm: films[2],
        }
    ));
  });

  it(`On film load`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = getFilmInfo(filmsRaw[1].id);

    apiMock
      .onGet(`${APIRoute.FILMS}/${films[1].id}`)
      .reply(HttpCode.OK, filmsRaw[1]);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FILM_INFO_SUCCESS,
          payload: films[1],
        });
      });
  });

  it(`On promo film load`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = getPromoFilm();

    apiMock
      .onGet(`${APIRoute.FILMS}/promo`)
      .reply(HttpCode.OK, filmsRaw[1]);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FILM_PROMO_SUCCESS,
          payload: films[1],
        });
      });
  });
});
