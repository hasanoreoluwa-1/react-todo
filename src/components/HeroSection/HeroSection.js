import React from "react";
import './HeroSection.css'
import hero from '../../images/hero.png'
import { useContext } from "react";
import { UserContext } from "../../App";

function HeroSection() {
    const user = useContext(UserContext)
    return (
        <div className="hero-section">

            <div className="hero-left">
                <h1>{user}, Let us be your Business plug</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Mollitia officiis soluta perferendis praesentium quibusdam consectetur aperiam cum optio nostrum ut,
                    sed incidunt perspiciatis delectus autem. Eos totam aliquid ut dolorum?
                </p>
            </div>
            <div className="hero-right">
                <img src={hero} width={'100%'} />
            </div>

        </div>
    )
}

export default HeroSection