// eslint-disable-next-line no-unused-vars
import React from 'react';
import {ProgressBar} from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const ProgressBarWithValue = ({progress}) => {
    const now = progress;
    return <ProgressBar style={{color: "red"}} now={now} label={`${now}%`} />;
};

export default ProgressBarWithValue;