import { pdfjs } from 'react-pdf';
import pdf2 from '../assets/files/11.pdf'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {FaCircleChevronLeft, FaCircleChevronRight} from "react-icons/fa6";
import {useParams} from "react-router-dom";
import db from "/database.json";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
/* eslint react/prop-types: 0 */

function PdfView() {

    const params = useParams();
    const pdf_string = db.researches[params.id-1].pdf;
    const index = pdf_string.lastIndexOf("/");
    const pre = pdf_string.slice(0, index+1);
    const post = pdf_string.slice(index+1);
    const pdf = pre + encodeURIComponent(post);
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    // console.log(pdf);
    // console.log(pdf2);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const handlePrevClick = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
            scrollTo(0, 0);
        }
    };

    const handleNextClick = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
            scrollTo(0, 0);
        }
    };
    return (
        <>
            <NavBar/>
            <div className={"pdf"}>
                <div className={"pdf-nav"}>
                    <button onClick={handlePrevClick}><FaCircleChevronLeft /></button>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                    <button onClick={handleNextClick}><FaCircleChevronRight /></button>
                </div>
                <div className={"pdf-page"}>
                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page scale={1.3} pageNumber={pageNumber}/>
                    </Document>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default PdfView;