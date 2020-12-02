import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Player} from './player';
import {films, noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`Player renders correctly`, () => {
  renderer.render(
      <Player
        film={films[1]}
        playbackActive={true}
        progress={20}
        timeLeft={100}
        player={<video/>}
        onPlaybackToggle={noop}
        onFullscreenToggle={noop}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
