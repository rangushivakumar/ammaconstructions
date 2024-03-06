import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import AC2 from '../assets/AC2.png'
import AC3 from '../assets/AC3.png'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const location = useLocation();
    const isHome = location.pathname === '/'
    const isService = location.pathname === '/services'
    const isAbout = location.pathname === '/aboutus'
    const isContact = location.pathname === '/contactus'
    return (
        <div>
            <nav className={isOpen ? "navbarr open" : "navbarr"}>
                <div className="navbar__logo">
                    <img src={AC3} alt="Company Logo" id='AC2'/>
                    <span id='cname'>Amma Constructions</span>
                </div>
                <ul className="navbar__navlinks">
                    <li><NavLink exact to="/" id={isHome? 'home' : ''} onClick={toggleMenu}>Home</NavLink></li>
                    <li><NavLink to="/services" id={isService? 'service' : ''} onClick={toggleMenu}>Services</NavLink></li>
                    <li><NavLink to="/aboutus" id={isAbout? 'aboutus' : ''} onClick={toggleMenu}>About Us</NavLink></li>
                    <li><NavLink to="/contactus" id={isContact? 'contactus' : ''} onClick={toggleMenu}>Contact Us</NavLink></li>
                </ul>
                <div className='iconcontainer' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
