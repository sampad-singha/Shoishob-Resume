import Card from "react-bootstrap/Card";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
const Skill = (props) => {
    const skill = props?.skill;


    // const imageURL = new URL(skill.image, import.meta.url).href;
    // const image = imageURL.slice(imageURL.indexOf("/src"),imageURL.length);

    return (
        <div className="skill-card">
            <Card style={{ width: '12rem' }}>
                <Card.Img as="img" variant="top" width="50px" src={skill.image} />
                <Card.Body>
                    <Card.Title>{skill.name}</Card.Title>
                    <div className="progress-bar-container">
                        <CircularProgressbar
                            minValue={0}
                            maxValue={10}
                            styles={buildStyles({
                                textColor: '#508C9B',
                                pathColor: `#508C9B`,
                                trailColor: '#d6d6d6',
                            })}
                            value={skill.level}
                            text={skill.level} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Skill;