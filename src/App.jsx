import React from "react";
import PdfViewer from "./PdfViewer";
import PDF from "./huckfinn.pdf";
import "./App.css";

const App = () => (
  <div className="content">
    <h1>PDF Viewer Example</h1>
    <PdfViewer pdf={PDF} />
  </div>
);

export default App;
