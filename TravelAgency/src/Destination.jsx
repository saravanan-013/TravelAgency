// Destination.js
import React from 'react';
import dest1 from './assets/img/dest1.jpg';
import dest2 from './assets/img/dest2.jpg';
import dest3 from './assets/img/dest3.jpg';

const Destination = () => {
    return (
        <section className="destination" id="destination">
            <div className="title">
                <h2>Our Most Popular <br /> Destinations</h2>
            </div>
            <div className="destination-content">
                {[{ img: dest1, place: 'Place', country: 'Country' }, { img: dest2, place: 'Place', country: 'Country' }, { img: dest3, place: 'Place', country: 'Country' }, { img: dest1, place: 'Place', country: 'Country' }].map((dest, index) => (
                    <div className="col-content" key={index}>
                        <img src={dest.img} alt="Destination" />
                        <h5>{dest.place}</h5>
                        <p>{dest.country}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Destination;
