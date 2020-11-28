import React, {createRef, PureComponent} from "react";
import {filmPropTypes, filmsListPropTypes} from '../common-prop-types';
import {connect} from "react-redux";
import PropTypes from "prop-types";

export const withFilmPlayer = (Component) => {
  class WithFilmPlayer extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        playbackActive: true,
        progress: 0,
        timeLeft: 0,
      };
      this.playerRef = createRef();
      this._handleTimeUpdate = this._handleTimeUpdate.bind(this);
      this.handleFullscreenToggle = this.handleFullscreenToggle.bind(this);
      this.handlePlaybackToggle = this.handlePlaybackToggle.bind(this);
    }

    componentDidUpdate() {
      const {playbackActive} = this.state;
      const player = this.playerRef.current;

      if (playbackActive) {
        player.play();
      } else {
        player.pause();
      }
    }

    componentDidMount() {
      const player = this.playerRef.current;
      player.play();
    }

    _handleTimeUpdate() {
      const {currentTime, duration} = this.playerRef.current;
      if (duration) {
        this.setState({
          progress: currentTime * 100 / duration,
          timeLeft: Math.round(duration - currentTime),
        });
      }
    }

    handleFullscreenToggle() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }

    handlePlaybackToggle() {
      this.setState((prev) => ({playbackActive: !prev.playbackActive}));
    }

    render() {
      const {
        filmsList,
        match: {params: {id}}
      } = this.props;

      const film = filmsList.find((movie) => {
        return (movie.id === Number(id));
      });

      const {playbackActive, progress, timeLeft} = this.state;
      return (
        <Component
          {...this.props}
          playbackActive={playbackActive}
          progress={progress}
          timeLeft={timeLeft}
          film={film}
          player={
            <video
              ref={this.playerRef}
              src={film.video}
              className="player__video"
              poster={film.backgroundImage}
              onTimeUpdate={this._handleTimeUpdate}
            />
          }
          onFullscreenToggle={this.handleFullscreenToggle}
          onPlaybackToggle={this.handlePlaybackToggle}
        />
      );
    }
  }

  WithFilmPlayer.propTypes = {
    film: filmPropTypes,
    filmsList: filmsListPropTypes,
    id: PropTypes.number,
    match: PropTypes.object,
  };

  const mapStateToProps = (state) => {
    return {
      filmsList: state.films.filmsList
    };
  };

  return connect(mapStateToProps)(WithFilmPlayer);
};
