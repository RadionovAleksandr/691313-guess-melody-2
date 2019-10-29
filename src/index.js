import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
import settings from '../mocks/game-settings';
import questions from '../mocks/questions';

const init = () => {
  ReactDOM.render(
      <App
        settings={settings}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
