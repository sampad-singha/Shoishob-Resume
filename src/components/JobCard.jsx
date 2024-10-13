
const JobCard = () => {
    return (
        <div className="job-card col-lg-8 col-md-10 col-sm-12">
            <div className="job-card-left">
                <img src="src/assets/cegis-logo.png" alt="CEGIS logo"/>
                <div className="text">
                    <h3>CEGIS</h3>
                    <p>Research Consultant, Remote Sensing Division</p>
                    <p className="time">Nov 2023 - Present</p>
                </div>
            </div>
            <div className="list">
                <h5>Responsibilities:</h5>
                <ul>
                    <li>
                        Consultancy Services for Land Use Mapping Using Satellite Images and Remote Sensing Technology.
                    </li>
                    <li>
                        Advanced GIS Analysis on Remote Sensing Data (Spatial Analysis, Developing Geospatial Database
                        analysis and Map preparation,Digital
                        Database Management for Data Accumulation,Compilation of Land Use Zoning and Cropping Pattern)
                    </li>
                    <li>
                        Chittagong City Water Logging Project ( Develop and Renovate the drainage network by connecting
                        the drains and canals)
                    </li>
                    <li>
                        Generation of the Land Cover and National Capital Map and Developing Integrated Collaborative
                        Forest Management Plan.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default JobCard