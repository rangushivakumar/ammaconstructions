import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Media() {
  return (
    <div>
        {/* <div>
        <a href="https://www.facebook.com"><FontAwesomeIcon   size='lg' icon={faFacebook}/></a>
        <a href="https://www.instagram.com"><FontAwesomeIcon  size='lg' icon={faInstagram}/></a>
        <a href="tel:+917093756346"><FontAwesomeIcon  size='lg' icon={faPhone}/></a>
        <a href={`https://wa.me/7093756346?text=${encodeMessage(defaultMessage)}`}><FontAwesomeIcon className="socialicon" size='lg' icon={faWhatsapp}/></a>
        </div> */}
    </div>
  )
}

export default Media
