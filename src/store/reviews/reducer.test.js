import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './actions';
import {getComments} from '../api-action';
import {reducer} from './reducer';
import {
  APIRoute,
  HttpCode
} from '../../constants';
import {films, reviews as comments, noop, reviews} from '../../test-data';

const api = createAPI(noop, noop);

const initialStateMock = {
  isCommentsFetching: true,
  comments: null,
};

describe(`Reviews reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On reviews fetch complete`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.GET_COMMENTS,
      payload: reviews,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isCommentsFetching: false,
          comments: reviews,
        }
    ));
  });

  it(`On reviews reset`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.CLEAR_COMMENTS,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isCommentsFetching: true,
          comments: null,
        }
    ));
  });

  it(`On comments load`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = getComments(films[1].id);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${films[1].id}`)
      .reply(HttpCode.OK, comments);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_COMMENTS,
          payload: comments
        });
      });
  });
});
