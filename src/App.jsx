import React from "react";
import PdfViewer from "./PdfViewer";
import PDF from "./huckfinn.pdf";
import "./App.css";

const App = () => (
  <div class="content">
    <h1>PDF Viewer Example</h1>
    <PdfViewer pdf={PDF} />
  </div>
);

export default App;
