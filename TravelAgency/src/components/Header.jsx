// Header.js
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [headerClass, setHeaderClass] = useState('');
    const [navbar, setNavbar] = useState('navbar');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHeaderClass('stick');
            } else {
                setHeaderClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   

    return (
        <header className={headerClass}>
            <a href="" className="logo"> Company </a>
            
            <ul className={navbar}>
                <li><a href="#home">Home</a></li>
                <li><a href="#package">Packages</a></li>
                <li><a href="#destination">Destination</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </header>
    );
};

export default Header;
