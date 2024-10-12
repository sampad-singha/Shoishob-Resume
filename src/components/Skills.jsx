import Skill from "./Skill.jsx";
import {Tab, Tabs} from "react-bootstrap";

const Skills = () => {
    return (
        <div className="skills">
            <h2>Technical Skills</h2>

            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    <div className="skill-group">
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div className="skill-group">
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <div className="skill-group">
                        <Skill/>
                        <Skill/>
                        <Skill/>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Skills;