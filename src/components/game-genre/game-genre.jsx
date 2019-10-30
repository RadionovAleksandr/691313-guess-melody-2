import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const answers = this.props.question.answers;

    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png"
              alt="Угадай мелодию"/>
          </a>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите инди-рок треки</h2>
          <form className="game__tracks" onSubmit={(evt) => {
            evt.preventDefault();
            this.props.onAnswer();
          }}>

            {answers.map((answer, i) => (
              <div key={`answer-${i}`} className="track">
                <AudioPlayer
                  src={answer.src}
                  isPlaying={this.state.activePlayer === i}
                  onPlayButtonClick={() => this.setState({
                    activePlayer: this.state.activePlayer === i ? -1 : i
                  })}
                />
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox"
                    name="answer" value={`answer-${i}`}
                    id={`answer-${i}`}/>
                  <label className="game__check"
                    htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            ))}

            <button className="game__submit button" type="submit">Ответить
            </button>
          </form>
        </section>
      </section>
    );
  }
}

GameGenre.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]),
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(
        PropTypes.exact({
          src: PropTypes.string,
          genre: PropTypes.string,
        })
    ),
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GameGenre;
