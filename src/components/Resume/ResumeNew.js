import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/anuj_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const h = () => setWidth(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  const getScale = () => {
    if (width > 1200) return 1.7;
    if (width > 992) return 1.4;
    if (width > 768) return 1.1;
    if (width > 576) return 0.9;
    return 0.6;
  };

  return (
    <div className="resume-section-new">
      <motion.div
        className="resume-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>Resume</div>
        <h1 className="section-heading" style={{ marginBottom: "1.5rem" }}>
          My <span style={{ color: "var(--accent-green)" }}>Resume</span>
        </h1>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="btn-primary-custom"
          style={{ display: "inline-flex", marginBottom: "2.5rem" }}
        >
          <AiOutlineDownload /> Download CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Document
          file={pdf}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (_, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1.5rem",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <Page pageNumber={i + 1} scale={getScale()} />
            </div>
          ))}
        </Document>
      </motion.div>
    </div>
  );
}

export default ResumeNew;
