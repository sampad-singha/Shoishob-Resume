import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {useParams} from "react-router-dom";
import db from "/database.json";
const PptView = () => {
    const params = useParams();
    console.log(params.id);
    const record = db?.researches[params.id-1];
    console.log(record.id);
    return (
        <div className={"ppt-view"}>
            <NavBar/>
            <h3><strong>Title: </strong>{record.title}</h3>
            <div className={"ppt"}>
                <iframe
                    src={record.ppt}
                    width="952px"
                    height="576px"
                    loading="lazy">
                </iframe>
            </div>
            <Footer/>
        </div>
    );
};

export default PptView;