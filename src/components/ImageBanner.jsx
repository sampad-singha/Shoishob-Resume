import {FaCalendar} from "react-icons/fa";
import {GrAchievement} from "react-icons/gr";

const ImageBanner = () => {
    return (
        <div className="image-banner">
            <div className="image">
                <img className="placeholder" src="" alt="" height="300px" width="400px"/>
            </div>
            <div className="text">
                <div className="title">
                    <h5>CAPTAIN</h5>
                    <p className="time"><FaCalendar /> Oct 2022 - Jul 2023</p>
                </div>
                <h6>RUET Cricket Club</h6>
                <p>Rajshahi, Bangladesh</p>
                <p className="achievement"><GrAchievement /> Top 24 of Inter University Cricket Championship,2024</p>
            </div>
        </div>
    );
};

export default ImageBanner;