const React = require('react');

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: props.startingSlide
    }
  }
  render() {
    return (
      <div>
        I am on slide {this.state.currentSlideIndex}
      </div>
    );
  }
}

ImageSlider.defaultProps = {
  startingSlide: 0
};

ImageSlider.propTypes = {
  startingSlide: React.PropTypes.number
};

module.exports = ImageSlider;