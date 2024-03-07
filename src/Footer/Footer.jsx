import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
function Footer() {
  const encodeMessage = (message) => {
    return encodeURIComponent(message);
  };
  const defaultMessage = "I want to know more about Amma Constructions.";
  return (
    <div>
      <section>
        <div id="footer">
          <h4 className="heading">Amma Constructions</h4>
          <div className="footercontainer">
            <div className="contactsection">
              <h4>ADDRESS</h4>
              <p>
                H.no : 55/1/212/a/1, Bheemaram <br />
                Hanamkonda(district) <br />
                Pincode  534201
              </p>
            </div>
            <div className="quicklinks">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="https://sites.google.com/view/ammaconstruction/home">About Us</a>
                </li>
                <li>
                  <a href="https://sites.google.com/view/termsandconditionsconstruction/home">Terms & conditions</a>
                </li>
                <li>
                  <a href="https://sites.google.com/view/ammaconstructionpolicy/home">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="contactdetails">
              <h4>CONTACT DETAILS</h4>
              <p>
                <strong>Phone : </strong>9406054838 , 8367339969
              </p>
              <p>
                <strong>Hours : </strong>9.30 AM- 5.30 PM , Mon-Sun
              </p>
              <p>
                <strong>Gmail : </strong>houseamma20@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div id="copy">
          <div className="copyright">
            <div className="copyrighttext">
              &copy; 2024 Your Amma Constructions . All rights reserved.
            </div>
            <div className="sociallinks">
              {/* <a href="https://www.facebook.com">
                <FontAwesomeIcon
                  className="socialicon"
                  size="lg"
                  icon={faFacebook}
                />
              </a> */}
              <a href="https://www.instagram.com">
                <FontAwesomeIcon
                  className="socialicon"
                  size="lg"
                  icon={faInstagram}
                />
              </a>
              <a href="tel:+919406054838">
                <FontAwesomeIcon
                  className="socialicon"
                  size="lg"
                  icon={faPhone}
                />
              </a>
              <a
                href={`https://wa.me/+919406054838?text=${encodeMessage(
                  defaultMessage
                )}`}
                id="whatsapp"
              >
                <FontAwesomeIcon
                  className="socialicon"
                  size="lg"
                  icon={faWhatsapp}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
