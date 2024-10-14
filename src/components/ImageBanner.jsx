import {FaCalendar} from "react-icons/fa";
import {GrAchievement} from "react-icons/gr";

const ImageBanner = (props) => {
    const data = props.data;
    return (
        <div className="image-banner">
            <div className="image">
                <img className="" src={data.image} alt="" height="270px" width="360px"/>
            </div>
            <div className="text">
                <div className="title">
                    <h5>{data.designation}</h5>
                    <p className="time"><FaCalendar/>{data.span}</p>
                </div>
                <h6>{data.organization}</h6>
                <p>{data.location}</p>
                {data.achievement && <p className="achievement"><GrAchievement/>{` `+data.achievement}</p>}
            </div>
        </div>
    );
};

export default ImageBanner;

