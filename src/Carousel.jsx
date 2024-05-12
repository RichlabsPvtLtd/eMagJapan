import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Correct path
import "slick-carousel/slick/slick-theme.css"; // Correct path
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";

export const Carousel = ({ onLogout }) => {
  const titles = [
    "Drive Clean",
    "EV News",
    "EV Updates",
    "Low Carbon",
    "Gas Fuels",
    "Final Issue",
  ]; // Add more titles as needed

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img
            src={require(`./assets/ab${i + 1}.png`)}
            alt={`Slide ${i + 1}`}
          />
          <h6>{titles[i]}</h6>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <div className="logoutWrapper">
        <Button
          variant="outline-light"
          size="md"
          onClick={() => onLogout(false)}
        >
          Logout
        </Button>
      </div>

      <Slider {...settings}>
        <div className="imageWrapper">
          <img src={require("./assets/ab1.png")} alt="Slide 1" />
        </div>
        <div className="imageWrapper">
          <img src={require("./assets/ab2.png")} alt="Slide 2" />
        </div>
        <div className="imageWrapper">
          <img src={require("./assets/ab3.png")} alt="Slide 3" />
        </div>
        <div className="imageWrapper">
          <img src={require("./assets/ab4.png")} alt="Slide 4" />
        </div>
        <div className="imageWrapper">
          <img src={require("./assets/ab5.png")} alt="Slide 4" />
        </div>
        <div className="imageWrapper">
          <img src={require("./assets/ab6.png")} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};
