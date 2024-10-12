import {FaSquareInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <h5>Follow me on social media</h5>
            <div className="footer-links">
                <a href=""><FaSquareInstagram />  Instagram</a>
                <a href=""><FaFacebook />  Facebook</a>
                <a href=""><FaLinkedin /> LinkedIn</a>
            </div>
            <p>©2025 Shahriar Ahmed</p>
        </div>
    );
};

export default Footer;