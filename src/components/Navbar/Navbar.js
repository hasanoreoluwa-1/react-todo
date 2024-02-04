import React from "react";
import './Navbar.css'
import { useContext } from "react";
import { UserContext } from "../../App";


function Navbar() {
    const user = useContext(UserContext)
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
        </div>
    )
}

export default Navbar