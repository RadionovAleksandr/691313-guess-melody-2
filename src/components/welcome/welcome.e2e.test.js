import Welcome from './welcome';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it(`Button Play click in Welcome`, () => {
  const onStartButtonClick = jest.fn();
  const app = shallow(
      <Welcome
        errorCount={0}
        gameTime={0}
        onStartButtonClick={onStartButtonClick}
      />);

  const startButton = app.find(`button`);
  startButton.simulate(`click`);
  expect(onStartButtonClick).toHaveBeenCalledTimes(1);
});
