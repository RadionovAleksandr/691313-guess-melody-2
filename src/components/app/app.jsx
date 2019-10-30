import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome/welcome.jsx';
import GameArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';

class App extends PureComponent {
  static getScreen(state, onUserAnswer) {
    const {gameTime, errorCount, currentLevel, questions} = state;

    if (currentLevel === -1) {
      return <Welcome
        gameTime={gameTime}
        errorCount={errorCount}
        onStartButtonClick={onUserAnswer}
      />;
    }

    const currentQuestion = questions[currentLevel];

    switch (currentQuestion.type) {
      case `genre`:
        return <GameGenre
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />;

      case `artist`:
        return <GameArtist
          question={currentQuestion}
          onAnswer={onUserAnswer}
        />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    const {settings, questions} = props;
    const {gameTime, errorCount, currentLevel} = settings;

    this.state = {
      gameTime,
      errorCount,
      currentLevel,
      questions,
    };
  }

  render() {
    return App.getScreen(this.state, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.currentLevel + 1;
        const isEnd = nextIndex >= this.state.questions.length;

        return {
          currentLevel: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  settings: PropTypes.exact({
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
    currentLevel: PropTypes.number.isRequired,
  }).isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
