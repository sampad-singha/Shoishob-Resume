// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ResearchCard from "../components/ResearchCard.jsx";
import db from "/database.json"
const Researches = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const researches = db?.researches;
    return (
        <>
            <NavBar/>
            <div className={"researches"}>
                <h1>Research Experience</h1>
                <h3>Undergrad Thesis</h3>
                {/*<ResearchCard/>*/}
                {/*<ResearchCard/>*/}
                <h3>Publication</h3>
                {/*<ResearchCard/>*/}
                <h3>Academic Research</h3>
                {researches.map((research,index) => {
                    if (research.type === "academic") {
                        return <ResearchCard key={index} research={research}/>
                    }
                })}
            </div>
            <Footer />
        </>
    );
};

export default Researches;