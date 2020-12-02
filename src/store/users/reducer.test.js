import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType, ActionType as UserActionType} from './actions';
import {checkAuth, login} from '../api-action';
import {reducer} from './reducer';
import {
  APIRoute,
  AuthorizationStatus,
  HttpCode
} from '../../constants';
import {noop, user} from '../../test-data';

const api = createAPI(noop, noop);

const initialStateMock = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: null,
  isLoginBadRequest: false,
};

describe(`User reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On authorization status change`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          authorizationStatus: AuthorizationStatus.AUTH,
        }
    ));
  });

  it(`On user avatar change`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.GET_USER_AVATAR,
      payload: `avatar.jpg`,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          userAvatar: `avatar.jpg`,
        }
    ));
  });

  it(`On bad request`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.BAD_REQUEST,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isLoginBadRequest: true,
        }
    ));
  });

  it(`On authorization check`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(HttpCode.OK, user);

    return request(dispatch, noop, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.REQUIRED_AUTHORIZATION,
          payload: `AUTH`
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_USER_AVATAR,
          payload: user.avatar_url,
        });
      });
  });

  it(`On authorization bad request`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const request = login({
      login: `test@user.comlongdomain`,
      password: `testPassword`,
    });

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(HttpCode.BAD_REQUEST, {
        response: {status: HttpCode.BAD_REQUEST}
      });

    return request(dispatch, noop, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: UserActionType.BAD_REQUEST,
        });
      });
  });
});
