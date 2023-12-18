import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
// import { PdfViewer } from "./PdfViewer";
// import { PDFViewer } from "@react-pdf/renderer";
// import { PrintChat } from "./PrintChat";
import { PdfFromFile } from "./PdfFromFile";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PDFViewer>
      <PdfViewer />
      <PrintChat />
    </PDFViewer> */}
    {/* <PDFViewer>
      <PrintChat />
    </PDFViewer> */}
    <PdfFromFile />
  </React.StrictMode>
);
