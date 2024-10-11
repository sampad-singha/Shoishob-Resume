// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Researches = () => {
    return (
        <div>
            <NavBar/>
            <h1>Research Experience</h1>
            <h3>Undergrad Thesis</h3>
            <p>Thesis Title: Title here</p> {/* work leter*/}
            <p>Thesis Title 2: Title here</p>
            <h3>Publication</h3>
            <p>Publication Title: Title here</p>
            <p>Publication Title 2: Title here</p>
            <h3>Academic Research</h3>
            <p>Research Title: Title here</p>

            <Footer />
        </div>
    );
};

export default Researches;