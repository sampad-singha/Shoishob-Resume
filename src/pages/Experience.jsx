// eslint-disable-next-line no-unused-vars
import React from 'react';
import JobCard from "../components/JobCard.jsx";
import NavBar from "../components/Navbar.jsx";
import ExtraCurricular from "../components/ExtraCurricular.jsx";
import Footer from "../components/Footer.jsx";
import db from "/database.json"

const Experience = () => {
    const experience = db?.experience;
    return (
        <div>
            <NavBar/>
            <div className="jobs">
                <h2>Professional Experience</h2>
                {experience.map((job, index) => {
                    return <JobCard
                        key={index}
                        job={job}
                    />
                })}
            </div>
            <ExtraCurricular/>
            <Footer/>
        </div>
    );
};

export default Experience;