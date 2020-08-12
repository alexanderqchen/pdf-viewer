import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./PdfViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ pdf }) => (
  <div className="pdf-container">
    <Document
      file={pdf}
      onContextMenu={(e) => e.preventDefault()}
      className="document"
    >
      <Page pageNumber={1} />
    </Document>
  </div>
);

export default PdfViewer;
