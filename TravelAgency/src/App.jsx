// App.jsx
import React from "react";

import Header from "./Header";  

import Home from "./Home";
import Container from "./Container";
import Packages from "./Packages";
import Destination from "./Destination";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./App.css"; // Include your CSS file here

const App = () => {
    return (
        <>
            <Header />
            <Home />
            <Container />
            <Packages />
            <Destination />
            <Newsletter />
            <Footer />
        </>
    );
};

export default App;
