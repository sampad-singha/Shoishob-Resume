import {Link} from "react-router-dom";
import {FaDownload, FaFilePowerpoint} from "react-icons/fa";

const ResearchCard = () => {
    return (
        <div className="research-card">
            <div>
                <img className="placeholder" src="" alt=""/>
            </div>
            <div className={"text"}>
                <Link className={"link"} to={'/research/'+1}>
                    The Economic Impact of Tropical Storms
                    on the Suburban&#39;s Mangrove Ecosystem
                    Services and Local Communities
                </Link>
                <div className={"info"}>
                    <div className={"info-text"}>
                        <p>Author(s): Shahriar Ahmed</p>
                        <p>Journal Name: Elsvier</p>
                        <p>Year: 2023</p>
                    </div>
                    <div className={"info-btn"}>
                        <a href=""><FaFilePowerpoint/></a>
                        <a href=""><FaDownload/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchCard;