import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {OverviewTab} from './overview-tab';
import {films} from '../../test-data';

const renderer = new ShallowRenderer();

test(`OverviewTab renders correctly`, () => {
  renderer.render(<OverviewTab film={films[1]} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
