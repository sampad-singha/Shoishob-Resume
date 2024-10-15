import Skill from "./Skill.jsx";
import {Tab, Tabs} from "react-bootstrap";

const Skills = (props) => {
    const skills = props.skills;
    return (
        <div className="skills">
            <h2>Technical Skills</h2>

            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="geospatial" title="Geospatial Tools">
                    <div className="skill-group">
                        {skills.map((skill)=>{
                            if(skill.type === "geo"){
                                return <Skill key={skill.id} skill={skill}/>
                            }
                        })}
                    </div>
                </Tab>
                <Tab eventKey="Quantitative" title="Quantitative Data Analysis">
                    <div className="skill-group">
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                    </div>
                </Tab>
                <Tab eventKey="Programming" title="Programming Language">
                    <div className="skill-group">
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                    </div>
                </Tab>
                <Tab eventKey="DataVisualization" title="Data Visualization Tools">
                    <div className="skill-group">
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                    </div>
                </Tab>
                <Tab eventKey="Design" title="Design and Modelling">
                    <div className="skill-group">
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                        {/*<Skill/>*/}
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Skills;