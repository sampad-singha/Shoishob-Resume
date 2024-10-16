import {Link} from "react-router-dom";
import {FaDownload, FaFilePowerpoint} from "react-icons/fa";

const ResearchCard = (props) => {
    const record = props.research;
    const id=record.id;
    return (
        <div className="research-card">
            <div>
                <img className="" src={record.image} alt=""/>
            </div>
            <div className={"text"}>
                <Link className={"link"} to={'/research/'+id}>
                    {record.title}
                </Link>
                <div className={"info"}>
                    <div className={"info-text"}>
                        <p><strong>Authors: </strong>
                            {record.authors.map((author,index) => {
                                return <span key={index}>{author}, </span>
                            })}
                        </p>
                        <p><strong>Journal Name: </strong>{record.journal}</p>
                        <p><strong>Year: </strong>{record.year}</p>
                    </div>
                    <div className={"info-btn"}>
                        {record.ppt && <a className={"btn btn-lg btn-ppt"} href={'/presentation/' + record.id}><FaFilePowerpoint className={"ppt-icon"}/></a>}
                        {record.pdf && <a className={"btn btn-lg btn-down"} href={record.pdf} download={record.title+".pdf"}><FaDownload/></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchCard;