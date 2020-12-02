import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {PrivateRoute} from './private-route';
import {AuthorizationStatus} from '../../constants';

const renderer = new ShallowRenderer();

test(`PrivateRoute renders correctly`, () => {
  renderer.render(
      <PrivateRoute
        authorizationStatus={AuthorizationStatus.AUTH}
        exact={true}
        path="/test-private-route"
        render={() => (<div>Private route</div>)}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
