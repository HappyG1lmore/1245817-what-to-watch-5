import React from "react";
import PropTypes from "prop-types";
import {filmPropTypes} from "../../common-prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../../components/video-player/video-player";
import {videoPlayerSize, timeoutTime} from "../../constants";

class SmallMovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredFilm: null,
      playPreview: null
    };
    this.cardHoverTimeout = null;
  }

  render() {
    const {film} = this.props;
    const {hoveredFilm} = this.state;
    const frame = film.frame;
    const videoLink = film.video;
    const filmId = film.id;
    const muted = true;

    const handleMouseEnter = () => {
      this.cardHoverTimeout = setTimeout(() => {
        this.setState(() => {
          return {
            hoveredFilm: film.id,
          };
        });
      },
      timeoutTime.oneSecond);
    };

    const handleMouseLeave = () => {
      clearTimeout(this.cardHoverTimeout);
      this.setState(() => {
        return {
          hoveredFilm: null
        };
      });
    };

    return (
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Link to={`/films/${film.id}`}>
          <VideoPlayer
            frame={frame}
            videoLink={videoLink}
            filmId={filmId}
            playPreview={hoveredFilm === film.id}
            width={videoPlayerSize.preview.width}
            height={videoPlayerSize.preview.height}
            muted={muted}
          />
        </Link>
        <h3 className="small-movie-card__title">
          <Link to={`/films/${film.id}`} className="small-movie-card__link" href="movie-page.html">{film.title} </Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: filmPropTypes,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
};

export default SmallMovieCard;
