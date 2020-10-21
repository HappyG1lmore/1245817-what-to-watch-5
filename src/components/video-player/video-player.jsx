import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {film, playedFilm} = this.props;
    if (playedFilm === film.id) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.load();
    }
  }

  render() {
    const {film} = this.props;
    return (
      <video
        ref={this.videoRef}
        poster={film.frame}
        src={film.video}
        muted
        width="280"
        height="175"
      />
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object,
  playedFilm: PropTypes.any
};
export default VideoPlayer;
