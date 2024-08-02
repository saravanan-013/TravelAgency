// Container.js
import React from 'react';
import trip1 from '../assets/img/trip1.png';
import trip3 from '../assets/img/trip3.png';
import trip4 from '../assets/img/trip4.png';

// import trip5 from "../assets/img/trip1.png"

const Container = () => {
    return (
        <section className="container">
            <div className="text">
                <h2>Start Your Vacation <br /> with Lots of Services!</h2>
            </div>
            <div className="row-items">
                <div className="container-box">
                    <div className="container-img">
                        <img src={trip1} alt="Air Trip" />
                    </div>
                    <h4>Air Trip</h4>
                    <p>150 places</p>
                </div>
                <div className="container-box">
                    <div className="container-img">
                        <img src={trip3} alt="Air Trip" />
                    </div>
                    <h4>Summer Trip</h4>
                    <p>145 places</p>
                </div>
                <div className="container-box">
                    <div className="container-img">
                        <img src={trip4} alt="Air Trip" />
                    </div>
                    <h4>Winter Trip</h4>
                    <p>125 places</p>
                </div>
            </div>
        </section>
    );
};

export default Container;
