    // Newsletter.js
import React from 'react';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="news-text">
                <h2>Newsletter</h2>
                <p>Subscribe to receive upcoming packages <br /> and services</p>
            </div>
            <div className="send">
                <form>
                    <input type="email" placeholder="Write your Email" required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
