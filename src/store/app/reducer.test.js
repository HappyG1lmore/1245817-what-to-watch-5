import {ActionType} from './actions';
import {reducer} from './reducer';

const initialStateMock = {
  isApiRequestError: false,
};

describe(`App reducer should correctly update state`, () => {
  it(`On unknown action`, () => {
    expect(reducer(initialStateMock, {})).toEqual(initialStateMock);
  });

  it(`On api request error`, () => {
    expect(reducer(initialStateMock, {
      type: ActionType.SET_API_REQUEST_ERROR,
    })).toEqual(Object.assign(
        {},
        initialStateMock,
        {
          isApiRequestError: true
        }
    ));
  });
});

