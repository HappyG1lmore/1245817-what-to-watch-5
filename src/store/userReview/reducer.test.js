import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './actions';
import {uploadReview} from '../api-action';
import {reducer} from './reducer';
import {
  APIRoute,
  HttpCode
} from '../../constants';
import {user, reviews, noop} from '../../test-data';

const api = createAPI(noop, noop);

const initialStateMock = {
  isUploading: false,
};

describe(`UserReviews reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On review upload start`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.UPLOAD_REVIEW,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isUploading: true,
        }
    ));
  });

  it(`On review upload complete`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.UPLOAD_REVIEW_COMPLETE,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isUploading: false,
        }
    ));
  });

  it(`On review upload`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = uploadReview(reviews[1], user.id);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/${user.id}`)
      .reply(HttpCode.OK, reviews[1]);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPLOAD_REVIEW,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.UPLOAD_REVIEW_COMPLETE,
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `${APIRoute.FILMS}/${user.id}`,
        });
      });
  });
});
