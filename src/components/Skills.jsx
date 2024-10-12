import Skill from "./Skill.jsx";
import {Tab, Tabs} from "react-bootstrap";

const Skills = () => {
    return (
        <div>
            <h1>Technical Skills</h1>

            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Tab content for Contact
                </Tab>
            </Tabs>
            <Skill/>
        </div>
    );
};

export default Skills;