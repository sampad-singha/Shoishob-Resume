import {Link} from "react-router-dom";

const ResearchCard = () => {
    return (
        <div className="research-card">
            <div>
                <img className="placeholder" src="" alt=""/>
            </div>
            <div className={"text"}>
                <Link to={'/research/'+1}>
                    <h5>The Economic Impact of Tropical Storms
                        on the Suburban&#39;s Mangrove Ecosystem
                        Services and Local Communities </h5>
                </Link>
                <p>Author(s)</p>
                <p>Journal Name</p>
                <p>Year</p>
            </div>
        </div>
    );
};

export default ResearchCard;