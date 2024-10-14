// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import JobCard from "../components/JobCard.jsx";
import NavBar from "../components/Navbar.jsx";
import ExtraCurricular from "../components/ExtraCurricular.jsx";
import Footer from "../components/Footer.jsx";
import db from "/database.json"

const Experience = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const experience = db?.experience;
    const extraCurricular = db?.extraCurricular;
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
            <ExtraCurricular data={extraCurricular}/>
            <Footer/>
        </div>
    );
};

export default Experience;