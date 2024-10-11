// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProgressBarWithValue from "./ProgressBarWithValue.jsx";

const Skill = () => {
    return (
        <div style={{width: "10%"}}>
            <h3>ArcMap</h3>
            <ProgressBarWithValue progress={90}/>
        </div>
    );
};

export default Skill;