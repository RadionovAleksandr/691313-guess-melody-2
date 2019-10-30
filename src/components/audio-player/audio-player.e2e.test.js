import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Play and stop AudioPlayer`, () => {
  const onPlayButtonClick = jest.fn();
  const app = shallow(
      <AudioPlayer
        isPlaying={false}
        onPlayButtonClick={onPlayButtonClick}
        src={`https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`}
      />);

  const playButton = app.find(`button`);
  playButton.simulate(`click`);
  expect(app.find(`.track__button--pause`)).toHaveLength(1);

  playButton.simulate(`click`);
  expect(app.find(`.track__button--play`)).toHaveLength(1);
});
