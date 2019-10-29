import GameGenre from './game-genre.jsx';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`Submit form in GameGenre screen`, () => {
  const onAnswer = jest.fn();

  const app = shallow(
      <GameGenre
        onAnswer={onAnswer}
        question={{
          type: `genre`,
          genre: `rock`,
          answers: [
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `rock`,
            },
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `pop`,
            },
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `jazz`,
            },
            {
              src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
              genre: `rock`,
            },
          ],
        }}
      />
  );

  const GameGenreForm = app.find(`.game__tracks`);
  GameGenreForm.simulate(`submit`, {
    preventDefault: () => {},
  });
  expect(onAnswer).toHaveBeenCalledTimes(1);
});
