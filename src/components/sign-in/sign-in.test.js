import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {AuthorizationStatus} from '../../constants';
import {SignIn} from './sign-in';
import {noop} from '../../test-data';

const renderer = new ShallowRenderer();

describe(`SignIn page renders correctly`, () => {
  it(`When user is authorized`, () => {
    renderer.render(
        <SignIn
          authorizationStatus={AuthorizationStatus.AUTH}
          isLoginBadRequest={false}
          userPassword={`testPassword`}
          userEmail={`test@email.com`}
          onHandleFieldChange={noop}
          loginAction={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When form filled`, () => {
    renderer.render(
        <SignIn
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          isLoginBadRequest={false}
          userPassword={`testPassword`}
          userEmail={`test@email.com`}
          onHandleFieldChange={noop}
          loginAction={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When got bad request from server`, () => {
    renderer.render(
        <SignIn
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          isLoginBadRequest={true}
          userPassword={`testPassword`}
          userEmail={`test@email.com`}
          onHandleFieldChange={noop}
          loginAction={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
