import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import pdf from '/src/assets/1-A Comparative Analysis of Machine Learning Algorithms to Predict Alzheimer Disease.pdf'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

function PdfView() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const handlePrevClick = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const handleNextClick = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    return (
        <>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>Next</button>
            <div>
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page scale={2} pageNumber={pageNumber}/>
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </>
    );
}

export default PdfView;