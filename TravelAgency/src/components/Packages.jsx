// Packages.js
import React from 'react';
import img1 from '../assets/img/1.png';

const Packages = () => {
    return (
        <section className="package" id="package">
            <div className="title">
                <h2>Our Upcoming <br /> Tour Packages</h2>
            </div>
            <div className="package-content">
                {Array(8).fill(0).map((_, index) => (
                    <div className="box" key={index}>
                        <div className="thum">  
                            <img src={img1} alt="Package" />
                        </div>
                        <div className="dest-content">
                            <div className="location">
                                <h4>Place</h4>
                                <p>4h - 5h</p>
                            </div>
  
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Packages;
