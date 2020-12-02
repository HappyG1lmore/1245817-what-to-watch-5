import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Tabs} from './tabs';
import {TabType} from '../../constants';
import {films, noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`Tabs renders correctly`, () => {
  renderer.render(
      <Tabs
        activeTab={TabType.DETAILS}
        film={films[1]}
        onTabChange={noop}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
