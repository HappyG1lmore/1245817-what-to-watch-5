import React, {PureComponent} from "react";

const HOVER_TIMEOUT = 1000;

export const withSmallMovieCardState = (Component) => {
  return class SmallMovieCardState extends PureComponent {
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
      const {playPreview} = this.state;
      return <Component
        {...this.props}
        handleMouseEnter = {this.handleMouseEnter}
        handleMouseLeave = {this.handleMouseLeave}
        playPreview = {playPreview}
      />;
    }
  };
};
