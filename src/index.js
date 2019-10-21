import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';

const init = () => {
  const setting = {
    gameTime: 5,
    errorCount: 3,
  };

  const playClickHandler = () => {};

  ReactDOM.render(
      <App
        gameTime={setting.gameTime}
        errorCount={setting.errorCount}
        playClickHandler={playClickHandler}
      />,
      document.querySelector(`#root`)
  );
};

init();
