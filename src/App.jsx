// import './App.css'
import NavBar from "./components/Navbar.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CardHorizontal from "./components/CardHorizontal.jsx";
import JobCard from "./components/JobCard.jsx";
import Skill from "./components/Skill.jsx";

function App() {

  return (
    <>
        <NavBar/>
        <div>
            <h1>SHAHRIAR AHMED</h1>
            <h3>Software Engineer</h3>
        </div>
        <Container>
            <Row>
                <Col>
                    <h1>Personal Information</h1>
                    <p>Address: 123, ABC Street, XYZ City, Country</p>
                    <p>Phone: +8801234567890</p>
                    <p>Email:</p>
                    <p>Website:</p>
                </Col>
                <Col>
                    <img src="" alt=""/>
                </Col>
            </Row>
        </Container>
        <Skill/>
        <div>
            <h1>Academic Credentials</h1>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
        </div>
    </>
  )
}

export default App
