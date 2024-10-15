import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <h5>Follow me on social media</h5>
            <div className="footer-links">
                <a target="_blank" onClick={()=>(e.preventDefault())} href="https://www.instagram.com/shoi5hob?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /></a>
                <a target="_blank" onClick={()=>(e.preventDefault())} href="https://www.facebook.com/profile.php?id=100010469265956"><FaFacebook /></a>
                <a target="_blank" onClick={()=>(e.preventDefault())} href="https://www.linkedin.com/"><FaLinkedin /></a>
            </div>
            <p>© 2025 Shahriar Ahmed</p>
        </div>
    );
};

export default Footer;