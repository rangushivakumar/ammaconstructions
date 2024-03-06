import React from "react";
import "./About.css";
import { faBullseye, faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "../Slider/Slider";
import AboutUs from "../assets/aboutus.jpg";
function About({ showSlider }) {
  return (
    <div>
      {showSlider && <Slider />}
      <section className="about">
        <p className="heading">About Us</p>
        <div className="aboutamma">
          <div className="firstflex">
            <h4>WE ARE AMMA CONSTRUCTION</h4>
            <p>
              Certainly, here's an extended version of the paragraph: "At Amma
              Construction, we are dedicated to crafting homes of unparalleled
              quality and craftsmanship. Our comprehensive range of services
              includes not only exceptional house construction but also
              complimentary offerings such as penthouse, bore, and compound wall
              constructions, ensuring a holistic approach to our clients' needs.
              Operating across Telangana and Andhra Pradesh, we pride ourselves
              on our transparent business practices and unwavering commitment to
              integrity. With a focus on customer satisfaction, we go above and
              beyond to exceed expectations, delivering results that stand the
              test of time. At Amma Construction, we don't just build houses; we
              create dream homes where families can thrive and memories are
              made."
            </p>
          </div>
          <div className="secondflex">
            <div className="mv">
              <div className="mission">
                <FontAwesomeIcon className="missionicon" icon={faBullseye} />
                <h4>Mission</h4>
              </div>
              <p>
                Our mission is to redefine the construction
                industry through innovative solutions and unwavering commitment
                to customer satisfaction.
              </p>
            </div>
            <div>
              <div className="mission">
                <FontAwesomeIcon className="missionicon" icon={faBinoculars} />
                <h4>Vision</h4>
              </div>
              <p>
                We aspire to create
                communities of enduring value, where every home we build
                reflects our dedication to craftsmanship, integrity, and the
                well-being of our clients and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {showSlider && (
        <div className="aboutcompany">
          <img src={AboutUs} alt="about company" className="aboutimage" />
        </div>
      )}
    </div>
  );
}

export default About;
