import React, {PureComponent} from "react";
import {filmPropTypes} from "../../common-prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../../components/video-player/video-player";

const PreviewSize = {
  WIDTH: `280`,
  HEIGHT: `175`
};

const HOVER_TIMEOUT = 1000;

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playPreview: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.cardHoverTimeout = null;
  }

  handleMouseEnter() {
    this.cardHoverTimeout = setTimeout(() => {
      this.setState({playPreview: true});
    }, HOVER_TIMEOUT);
  }

  handleMouseLeave() {
    clearTimeout(this.cardHoverTimeout);
    this.setState({playPreview: false});
  }

  render() {
    const {film} = this.props;
    const {playPreview} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Link to={`/films/${film.id}`}>
          <VideoPlayer
            poster={film.frame}
            src={film.video}
            playPreview={playPreview}
            width={PreviewSize.WIDTH}
            height={PreviewSize.HEIGHT}
            muted
          />
        </Link>
        <h3 className="small-movie-card__title">
          <Link
            to={`/films/${film.id}`}
            className="small-movie-card__link"
          >
            {film.title}
          </Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: filmPropTypes,
};

export default SmallMovieCard;
