import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GameArtist extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.clickPlayHandler = this.clickPlayHandler.bind(this);
  }

  clickPlayHandler() {
    const isPlaying = this.state.isPlaying;
    this.setState({isPlaying: !isPlaying});
  }

  render() {
    const song = this.props.question.song;
    const answers = this.props.question.answers;

    return (
      <section className="game game--artist">
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
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                src={song.src}
                onPlayButtonClick={this.clickPlayHandler}
                isPlaying={this.state.isPlaying}
              />
            </div>
          </div>

          <form className="game__artist" onChange={this.props.onAnswer}>

            {answers.map((answer, i) => (
              <div className="artist" key={`answer-${i}`}>
                <input className="artist__input visually-hidden" type="radio"
                  name="answer" value={`artist-${i}`} id={`artist-${i}`}/>
                <label className="artist__name" htmlFor={`artist-${i}`}>
                  <img className="artist__picture"
                    src={answer.picture} alt={answer.artist}/>
                  {answer.artist}
                </label>
              </div>
            ))}

          </form>
        </section>
      </section>
    );
  }
}

GameArtist.propTypes = {
  question: PropTypes.exact({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    song: PropTypes.exact({
      artist: PropTypes.string,
      src: PropTypes.string,
    }),
    answers: PropTypes.arrayOf(PropTypes.exact({
      picture: PropTypes.string,
      artist: PropTypes.string,
    })),
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GameArtist;
