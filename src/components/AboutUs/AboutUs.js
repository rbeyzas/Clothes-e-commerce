import React, { Component } from "react";
import { connect } from "react-redux";
import "./AboutUs.css";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import be from "../../img/be.png";
import de from "../../img/de.png";
import he from "../../img/he.png";
import logo from "../../img/LogoAS.png";
import arrow from "../../img/arrow.png";

const AboutUs = () => {
  return (
    <div>
      <div class="jumbotron text-center rounded-0">
        <h1>Who We Are</h1>
        <br />
        <h3>B-C-D Software Company </h3>
      </div>

      <div class="container-fluid">
        <div class="row">
          {/* ilk satırın sol kısmı */}
          <div class="col-sm-6">
            <img class=" w-100 h-75" id="imgBe" src={be}></img>
          </div>
          {/* ilk satırın sağ kısmı */}
          <div class="col-sm-6 mb-5">
            <div class="container-fluid text-center">
              <div id="ServHead">
                <h2>SERVICES</h2>
                <h4>What we offer</h4>
              </div>
              <br />
              <div id="ServFirstRow" class="row">
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <i class="fa fa-diamond" aria-hidden="true"></i>
                  <h4>Quality</h4>
                  <p>Best product promise</p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <i class="fa fa-cubes" aria-hidden="true"></i>
                  <h4>Efficient Service</h4>
                  <p>We offer the highest quality service.</p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <i class="fa fa-handshake-o" aria-hidden="true"></i>
                  <h4>Fast shipping</h4>
                  <p>It works with the best shipping companies.</p>
                </div>
              </div>
              <br />
              <br />
              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <i class="fa fa-tree" aria-hidden="true"></i>
                  <h4>GREEN</h4>
                  <p>We are an environmentally friendly company.</p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <i class="fa fa-certificate" aria-hidden="true"></i>
                  <h4>CERTIFIED</h4>
                  <p>You will have licensed products.</p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4">
                  <i class="fa fa-smile-o" aria-hidden="true"></i>
                  <h4>Customer Happiness</h4>
                  <p>Customer Satisfaction = 95%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ilk satır bitimi */}

      <div class="container-fluid bg-grey">
        <div class="row">
          {/* ikinci satır sol kımı */}
          <div class="col-sm-6">
            <div>
              <h2>What our customers say</h2>
              <Carousel>
                <Carousel.Item interval={1000}>
                  <div class="p1">
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>
                    <br></br>
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>

                    <br></br>
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>
                    <hr></hr>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <div class="p1">
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>
                    <br></br>
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>

                    <br></br>
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>
                    <hr></hr>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div class="p1">
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>
                    <br></br>
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>

                    <br></br>
                    <p>
                      "This company is the best. I am so happy with the result!"
                    </p>
                    <p>Michael Roe, Vice President, Comment Box</p>
                    <hr></hr>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          {/* ikinci satır sağ kısmı */}

          <div class="col-sm-6">
            <img class="w-100 " id="imgDe" src={de}></img>
          </div>
        </div>
      </div>
      {/* ikinci satır bitimi */}

      <div class="container-fluid">
        <div class="row">
          {/* üçüncü satır sol kısmı*/}
          <div class="col-sm-6">
            <img class="w-100" id="imgHe" src={he}></img>
          </div>
          {/* üçüncü satır sağ kısmı*/}
          <div class="col-sm-6">
            <div id="contactCss" class="container-fluid bg-grey">
              <h2 class="text-center">CONTACT With Us</h2>
              <div class="row">
                <div class="col-sm-5 contactForm">
                  <p>Contact us and we'll get back to you within 24 hours.</p>
                  <p>
                    <span class="glyphicon glyphicon-map-marker"></span> Turkey,
                    Adana
                  </p>
                  <p>
                    <span class="glyphicon glyphicon-phone"></span>{" "}
                    +90-0504-654-78-84
                  </p>
                  <p>
                    <span class="glyphicon glyphicon-envelope"></span>{" "}
                    beyzaCagriDeniz@gmail.com
                  </p>
                </div>
                <div class="col-sm-7 contactForm">
                  <div class="row">
                    <div class="col-sm-6 form-group">
                      <input
                        class="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        required
                      />
                    </div>
                    <div class="col-sm-6 form-group">
                      <input
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    class="form-control"
                    id="comments"
                    name="comments"
                    placeholder="Comment"
                    rows="5"
                  ></textarea>
                  <br />
                  <div class="row">
                    <div class="col-sm-12 form-group">
                      <button class="btn btn-default pull-right" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="container-fluid bg-1 text-center">
            <h3>Who Are Use?</h3>
            <img src={logo} className="img-circle logol" alt="LogoBCD" />
          </div>
        </div>
      </div>
      <div class="container-fluid d-flex justify-content-end ">
        <a href="#" title="To Top">
          <img class="arrow h-60" src={arrow} />
        </a>
      </div>
    </div>
  );
};
export default connect()(AboutUs);
