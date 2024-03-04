import React from "react";
import Carousel from "react-bootstrap/Carousel";
import h1 from "../assets/h1.jpg";
import h2 from '../assets/h2.png';
import h3 from '../assets/h3.png'
import "./Slider.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import card2 from '../assets/card2.jpg'
function Slider() {
  return (
    <div>
      <div className="slider">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img src={h1} alt="firstimage" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={h2} alt="firstimage" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={h3} alt="firstimage" />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
}

export default Slider;
