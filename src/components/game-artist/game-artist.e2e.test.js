import GameArtist from './game-artist';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`Change form in GameArtist screen`, () => {
  const onAnswer = jest.fn();

  const app = shallow(
      <GameArtist
        question={{
          type: `artist`,
          song: {
            artist: `Jim Beam`,
            src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          },
          answers: [
            {
              picture: `http://placehold.it/134x134`,
              artist: `John Snow`,
            },
            {
              picture: `http://placehold.it/134x134`,
              artist: `Jack Daniels`,
            },
            {
              picture: `http://placehold.it/134x134`,
              artist: `Jim Beam`,
            },
          ],
        }}
        onAnswer={onAnswer}
      />
  );

  const GameArtistForm = app.find(`.game__artist`);
  GameArtistForm.simulate(`change`);
  expect(onAnswer).toHaveBeenCalledTimes(1);
});
