import NavBar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Academic from "./components/Academic.jsx";
import Footer from "./components/Footer.jsx";
import {FaLocationDot} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import db from "/database.json"
import {useEffect} from "react";

function App() {
    const academic = db?.academic;
    const skills = db?.skills;
    const shoishob_image = "/assets/shoishob.jpg"
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []);
  return (
      <>
          <NavBar/>
          <div className="landing">
              <h1>SHAHRIAR AHMED</h1>
              <h3>Planner</h3>
          </div>
          <div className="about">
              <div className="col-lg-8 col-md-12 about-text">
                  <h2>About Myself</h2>
                  <p>
                      A curious mind with a passion for discovery, I thrive at the intersection of creativity
                      and problem-solving. With a background in [your field], I enjoy diving deep into complex
                      challenges and turning insights into actionable solutions. Whether working on innovative projects,
                      conducting research, or collaborating with dynamic teams, I bring a blend of analytical thinking
                      and creativity to every endeavor. In my free time, I love exploring new technologies, reading
                      about
                      emerging trends, and engaging in outdoor adventures. Driven by curiosity and a desire to make an
                      impact, I continuously seek opportunities to grow and learn.</p>
                  <h6><FaLocationDot/> Pabna, Bangladesh</h6>
                  <a href="tel:+8801234567890"><FaPhone/> 01752-218687</a>
                  <a href="mailto:shahriarshoishob@gmail.com">
                      <MdEmail/> shoishobss95@gmail.com</a>
              </div>
              <div className="dp">
                  <img src={shoishob_image} className="shoishob-image" alt="shoishob image"/>
              </div>
          </div>
          <Skills skills={skills}/>
          <Academic
              data={academic}
          />
          <Footer/>
      </>
  )
}

export default App
