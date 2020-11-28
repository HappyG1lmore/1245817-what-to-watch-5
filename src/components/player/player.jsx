import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import browserHistory from '../../browser-history';
import {withFilmPlayer} from '../../hocs/with-film-player';
import {secToDate} from "../../utils"

const PlayIcon = () => (
  <>
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"/>
    </svg>
    <span>Play</span>
  </>
);

const PauseIcon = () => (
  <>
    <svg viewBox="0 0 14 21" width="14" height="21">
      <use xlinkHref="#pause" />
    </svg>
    <span>Pause</span>
  </>
);

const Player = (props) => {
  const {
    film,
    playbackActive,
    player,
    progress,
    timeLeft,
    onFullscreenToggle,
    onPlaybackToggle,
  } = props;

  const prettyTimeLeft = moment(secToDate(timeLeft)).format(`HH:mm:ss`);

  const handleExitBtnClick = () => browserHistory.push(`/films/${film.id}`);

  return (
    <div className="player">
      {player}

      <button
        className="player__exit"
        type="button"
        onClick={handleExitBtnClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max="100"
            />
            <div
              className="player__toggler"
              style={{left: `${progress}%`}}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {prettyTimeLeft}
          </div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlaybackToggle}
          >
            {playbackActive ? <PauseIcon /> : <PlayIcon />}
          </button>
          <div className="player__name">{film.title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullscreenToggle}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  film: PropTypes.object,
  playbackActive: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
  player: PropTypes.element.isRequired,
  onPlaybackToggle: PropTypes.func.isRequired,
  onFullscreenToggle: PropTypes.func.isRequired,
};

const WrappedPlayer = withFilmPlayer(Player);

export {Player};
export default WrappedPlayer;
