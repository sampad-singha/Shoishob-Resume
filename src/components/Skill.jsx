// eslint-disable-next-line no-unused-vars
import React from 'react';
import Card from "react-bootstrap/Card";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Skill = () => {
    return (
        <div className="skill-card">
            <Card style={{ width: '12rem' }}>
                <Card.Img as="img" variant="top" width="50px" src="src/assets/cegis-logo.png" />
                <Card.Body>
                    <Card.Title>ArcMap</Card.Title>
                    <div className="progress-bar-container">
                        <CircularProgressbar
                            styles={buildStyles({
                                textColor: '#508C9B',
                                pathColor: `#508C9B`,
                                trailColor: '#d6d6d6',
                            })}
                            value={75}
                            text={`${75}%`} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Skill;