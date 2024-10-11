// eslint-disable-next-line no-unused-vars
import React from 'react';
import JobCard from "../components/JobCard.jsx";
import NavBar from "../components/Navbar.jsx";
import ExtraCurricular from "../components/ExtraCurricular.jsx";
import Footer from "../components/Footer.jsx";

const Experience = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <h1>Professional Experience</h1>
                <JobCard/>
                <JobCard/>
            </div>
            <ExtraCurricular/>
            <Footer/>
        </div>
    );
};

export default Experience;