// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ResearchCard from "../components/ResearchCard.jsx";

const Researches = () => {
    return (
        <>
            <NavBar/>
            <div className={"researches"}>
                <h1>Research Experience</h1>
                {/*<PdfView/>*/}
                <h3>Undergrad Thesis</h3>
                <ResearchCard/>
                <ResearchCard/>
                <h3>Publication</h3>
                <ResearchCard/>
                <h3>Academic Research</h3>
                <ResearchCard/>
            </div>
            <Footer />
        </>
    );
};

export default Researches;