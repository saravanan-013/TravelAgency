// App.jsx
import React from "react";
import Header from "./components/Header";  
import Home from "./components/Home";
import Container from "./components/Container";
import Packages from "./components/Packages";
import Destination from "./components/Destination";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
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
