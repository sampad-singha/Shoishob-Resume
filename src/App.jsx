// import './App.css'
import NavBar from "./components/Navbar.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Skills from "./components/Skills.jsx";
import Academic from "./components/Academic.jsx";
import ExtraCurricular from "./components/ExtraCurricular.jsx";

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
        <Skills/>
        <Academic/>
    </>
  )
}

export default App
