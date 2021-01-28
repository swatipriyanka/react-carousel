import React from "react";
import "./Carousel.scss";

//no need to put these variables on state as we are are not going to usein View.
var touchstartX = 0;
var touchendX = 0;

class Carousel extends React.Component {
  state = {
    dimensions: {},
    slideNumber: 0,
  };

  componentWillMount() {
    window.addEventListener("resize", this.getDeviceDimensions);
    window.addEventListener("dragstart", this.handleGesure);
    window.addEventListener("dragend", this.handleGesure);
  }

  componentDidMount() {
    this.getDeviceDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getDeviceDimensions);
    window.removeEventListener("dragstart", this.handleGesure);
    window.removeEventListener("dragend", this.handleGesure);
  }

  handleGesure = (event) => {
    let children = React.Children.toArray(this.props.children);
    const itemsPerPage = this.getItemsPerPage();
      const totalSlides = Math.ceil(children.length / itemsPerPage);
      if (event.type === "dragstart") {
      touchstartX = event.screenX;
    } else {
      touchendX = event.screenX;
    }
    if (!touchstartX || !touchendX) return;
    if (touchendX < touchstartX) {
      if (this.state.slideNumber < totalSlides-1) this.onPressRight();
    }
    if (touchendX > touchstartX) {
      if (this.state.slideNumber > 0) this.onPressLeft();
    }
    touchendX = 0;
    touchstartX = 0;
  };

  getDeviceDimensions = () => {
    var win = window,
      doc = document,
      docElem = doc.documentElement,
      body = doc.getElementsByTagName("body")[0],
      width = win.innerWidth || docElem.clientWidth || body.clientWidth,
      height = win.innerHeight || docElem.clientHeight || body.clientHeight;
    this.setState({
      dimensions: {
        width,
        height,
      },
    });
  };

  onPressLeft = () => {
    this.setState((prevState) => ({
      slideNumber: prevState.slideNumber - 1,
    }));
  };

  onPressRight = () => {
    this.setState((prevState) => ({
      slideNumber: prevState.slideNumber + 1,
    }));
  };

  jumpToSlide = (index) => {
    this.setState({ slideNumber: index });
  };

  getItemsPerPage = () => {
    const { responsive } = this.props;
    const { dimensions } = this.state;
    if (!responsive || !dimensions.width) return 6;
    const currentDevice = Object.keys(responsive).find(
      (deviceType) =>
        responsive[deviceType].breakpoint.min < dimensions.width &&
        dimensions.width <= responsive[deviceType].breakpoint.max
    );
    return responsive[currentDevice].items;
  };

  render() {
    console.log(this.state.dimensions);
    let children = React.Children.toArray(this.props.children);
    const itemsPerPage = this.getItemsPerPage();
    const totalSlides = Math.ceil(children.length / itemsPerPage);
    const slideStartIndex = this.state.slideNumber * itemsPerPage;
    const slideEndIndex = slideStartIndex + itemsPerPage;
 
    return (
      <div className="react-carousel">
        <ul className="react-carousel-list">
          {this.state.slideNumber > 0 && (
            <button className="prev-btn" onClick={this.onPressLeft}>
              <i className="fa fa-chevron-left" />
            </button>
          )}
          {children
            .filter((_, i) => i >= slideStartIndex && i < slideEndIndex)
            .map((item) => {
              return (
                <li
                  className="carousel-item"
                  style={{ width: `calc(100%/${itemsPerPage})` }}
                >
                  {item}
                </li>
              );
            })}
          {this.state.slideNumber !== totalSlides - 1 && (
            <button onClick={this.onPressRight}>
              <i className="fa fa-chevron-right" />
            </button>
          )}
        </ul>
        <ul className="dot-container">
          {Array(totalSlides)
            .fill(null)
            .map((_, i) => (
              <li
                onClick={() => this.jumpToSlide(i)}
                className={`dot ${
                  this.state.slideNumber === i ? "active" : ""
                }`}
              ></li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Carousel;
