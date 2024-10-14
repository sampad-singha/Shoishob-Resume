import { pdfjs } from 'react-pdf';
import pdf from '/src/assets/1-A Comparative Analysis of Machine Learning Algorithms to Predict Alzheimer Disease.pdf'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {FaCircleChevronLeft, FaCircleChevronRight} from "react-icons/fa6";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function PdfView() {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

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
                        <Page scale={1.5} pageNumber={pageNumber}/>
                    </Document>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default PdfView;