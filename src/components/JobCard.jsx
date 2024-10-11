import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


const JobCard = () => {
    return (
        <Container>
            <Row>
                <Col className={"col-4"}>
                    <Row>
                        <Col>
                            <img src={""} alt={"CEGIS logo"}/>
                        </Col>
                        <Col>
                        <h2>CEGIS</h2>
                            <p>Research Consultant, Remote Sensing Division</p>
                            <p>Nov 2023- Present</p>
                        </Col>
                    </Row>
                </Col>
                <Col className={"col-8"}>
                    <ul>
                        <li>
                        Consultancy Services for Land Use Mapping Using Satellite Images and Remote Sensing Technology.
                        </li>
                        <li>
                            Advanced GIS Analysis on Remote Sensing Data (Spatial Analysis, Developing Geospatial Database analysis and Map preparation,Digital
                            Database Management for Data Accumulation,Compilation of Land Use Zoning and Cropping Pattern)
                        </li>
                        <li>
                            Chittagong City Water Logging Project ( Develop and Renovate the drainage network by connecting the drains and canals)
                        </li>
                        <li>
                            Generation of the Land Cover and National Capital Map and Developing Integrated Collaborative Forest Management Plan.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default JobCard