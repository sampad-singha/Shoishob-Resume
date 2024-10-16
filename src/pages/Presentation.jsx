import {useEffect} from "react";


const Presentation = () => {
    useEffect(() => {
        // redirect to /research when the component mounts
        window.location.href = '/research';
    }, []);
    return null;
};

export default Presentation;