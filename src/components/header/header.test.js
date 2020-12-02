import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {avatarUrl, noop} from '../../test-data';
import {AuthorizationStatus} from '../../constants';
import {Header} from './header';

const renderer = new ShallowRenderer();

describe(`Header renders correctly`, () => {
  it(`When user is authorized`, () => {
    renderer.render(
        <Header
          authorizationStatus={AuthorizationStatus.AUTH}
          userAvatar={avatarUrl}
          className={`className text`}
          withUserBlock={true}
          redirectTo={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When user is not authorized`, () => {
    renderer.render(
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`Without user block`, () => {
    renderer.render(
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          withUserBlock={false}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`With child`, () => {
    renderer.render(
        <Header authorizationStatus={AuthorizationStatus.NO_AUTH}>
          <p>Some test child</p>
        </Header>
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
