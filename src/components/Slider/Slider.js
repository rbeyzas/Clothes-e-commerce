// npm install react-bootstrap bootstrap ---> react bootstrap'i kur

import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Slider1 from "../../img/1.png";
import Slider2 from "../../img/2.jpg";
import Slider3 from "../../img/3.jpg";
import Slider4 from "../../img/4.png";

export default class slider extends Component {
  render() {
    return (
      <div>
        <Carousel style={{ paddingRight: "0px", paddingLeft: "0px" }}>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={Slider1} alt="First slide" />
            <Carousel.Caption>
              <h3>FASHION</h3>
              <p>CAROUSEL</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={Slider2} alt="Third slide" />
            <Carousel.Caption>
              <h3>FASHION</h3>
              <p>CAROUSEL</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slider3} alt="Third slide" />
            <Carousel.Caption>
              <h3>FASHION</h3>
              <p>CAROUSEL</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slider4} alt="Third slide" />
            <Carousel.Caption>
              <h3>FASHION</h3>
              <p>CAROUSEL</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
