import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import VideoPlayer from './video-player';

const renderer = new ShallowRenderer();

test(`VideoPlayer renders correctly`, () => {
  renderer.render(
      <VideoPlayer
        playbackActive={false}
        poster="/poster.jpeg"
        src="/video.mp4"
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
