import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './actions';
import {fetchFilms} from '../api-action';
import {reducer} from './reducer';
import {ALL_GENRES, APIRoute, HttpCode} from '../../constants';
import {films, filmsRaw, noop, genres} from '../../test-data';

const api = createAPI(noop, noop);

const initialStateMock = {
  genre: ALL_GENRES,
  filmsList: [],
  isFilmsFetching: true,
};

describe(`Films reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On change filter`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.CHANGE_FILTER_GENRE,
      payload: genres[2],
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          genre: genres[2]
        }
    ));
  });

  it(`On films fetch success`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.FETCH_FILMS_SUCCESS,
      payload: films,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isFilmsFetching: false,
          filmsList: films
        }
    ));
  });

  it(`On films load`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = fetchFilms();

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(HttpCode.OK, filmsRaw);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.FETCH_FILMS_SUCCESS,
          payload: films,
        });
      });
  });
});
