import React, {PureComponent} from "react";
import PropTypes from "prop-types";


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidUpdate() {
    const {playPreview} = this.props;
    if (playPreview) {
      this.videoRef.current.play();
    } else {
      this.videoRef.current.load();
    }
  }

  render() {
    const {frame, videoLink, width, height, muted} = this.props;
    return (
      <video
        ref={this.videoRef}
        poster={frame}
        src={videoLink}
        muted = {muted}
        width={width}
        height={height}
      />
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.object,
  playPreview: PropTypes.bool,
  frame: PropTypes.string,
  videoLink: PropTypes.string,
  filmId: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  muted: PropTypes.bool
};
export default VideoPlayer;
