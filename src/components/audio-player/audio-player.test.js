import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

it(`renders correctly AudioPlayer stop`, () => {
  const tree = renderer.create(
      <AudioPlayer
        isPlaying={false}
        onPlayButtonClick={() => {}}
        src={`https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly AudioPlayer play`, () => {
  const tree = renderer.create(
      <AudioPlayer
        isPlaying={true}
        onPlayButtonClick={() => {}}
        src={`https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
