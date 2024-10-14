
const JobCard = (props) => {
    const job = props.job;
    return (
        <div className="job-card col-lg-8 col-md-10 col-sm-12">
            <div className="job-card-left">
                <img src={job.image} alt="CEGIS logo"/>
                <div className="text">
                    <h3>{job.company}</h3>
                    <p>{job.designation}</p>
                    <p className="time">{job.span}</p>
                </div>
            </div>
            <div className="list">
                <h5>Responsibilities:</h5>
                <ul>
                    {job.responsibilities.map((responsibility, index) => {
                        return <li>{responsibility}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default JobCard