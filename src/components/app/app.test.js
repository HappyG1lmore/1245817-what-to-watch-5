import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {AuthorizationStatus} from '../../constants';
import {noop} from '../../test-data';
import {App} from './app';

const renderer = new ShallowRenderer();

describe(`App renders correctly`, () => {
  it(`When all data loaded without errors`, () => {
    renderer.render(
        <App
          authorizationStatus={AuthorizationStatus.AUTH}
          getPromoFilmAction={noop}
          checkAuthAction={noop}
          isApiRequestError={false}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When error occurred while data load`, () => {
    renderer.render(
        <App
          authorizationStatus={AuthorizationStatus.AUTH}
          getPromoFilmAction={noop}
          checkAuthAction={noop}
          isApiRequestError={true}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When some data is loading`, () => {
    renderer.render(
        <App
          authorizationStatus={AuthorizationStatus.AUTH}
          getPromoFilmAction={noop}
          checkAuthAction={noop}
          isApiRequestError={false}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
