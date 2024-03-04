import React from "react";
import "./About.css";
import { faBullseye, faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../Slider/Slider";
import AboutUs from '../assets/aboutus.jpg'
function About({showSlider}) {
  return (
    <div>
      {showSlider && <Slider />}
      <section className="about">
        <p className="heading">About Us</p>
        <div className="aboutamma">
          <div className="firstflex">
            <h4>WE ARE AMMA CONSTRUCTIONS</h4>
            <p>
              Our company believes in creating a better world by working on the
              principal of integrity, perseverance, trust and transparency in
              all our business endeavours. We at Hindustan Townships try to give
              a new experience of real estate to all our clients. We offer best
              plot for sale Near Shamshabad. Investing in Property with
              Hindustan Townships With our transparent policies and practices,
              we have created a niche for ourselves in the real estate business
              world which has resulted in enhanced customer satisfaction. Over
              the time, we have strengthened and have emerged as a trustworthy
              company in Shamshabad as we keep 100% transparency and no hidden
              charges
            </p>
          </div>
          <div className="secondflex">
          <div className="mv">
            <div className="mission">
                <FontAwesomeIcon className="missionicon" icon={faBullseye} />
                <h4>Mission</h4>
            </div>
            <p>To help maximum number of families to build their dream house by buying low price plots in Hyderabad.</p>
          </div>
          <div>
            <div className="mission">
                <FontAwesomeIcon className="missionicon" icon={faBinoculars} />
                <h4>Vision</h4>
            </div>
            <p>To help maximum number of families to build their dream house by buying low price plots in Hyderabad.</p>
          </div>
          </div>
        </div>
      </section>
      {showSlider && <div className="aboutcompany">
        <img src={AboutUs} alt="about company" className="aboutimage" />
      </div>}
    </div>
  );
}

export default About;
