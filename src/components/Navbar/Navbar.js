import React from "react";
import './Navbar.css'
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const user = useContext(UserContext)
    const [mobile, SetMobile] = useState(false)
    return (
        <div className="nav-bar">
            <div className="nav-logo">
                <h1>Logo</h1>
            </div>
            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Testimonies</li>
                <li>Welcome, {user} </li>
            </ul>
            <ul className={mobile ? "mobile-list mobile-active" : 'mobile-list'}>
                <li><a href="#">Home</a></li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Testimonies</li>
                <li>Welcome, {user} </li>
            </ul>
            <FontAwesomeIcon className="mobile" icon={mobile ? faClose : faBars} onClick={() => SetMobile(!mobile)} />
        </div>
    )
}

export default Navbar