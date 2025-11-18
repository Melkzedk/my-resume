import React from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import image1 from "../my-resume.jpg";

export default function Header({ dark, toggleTheme }) {
  const downloadPDF = () => {
    const resume = document.body;

    html2canvas(resume, { scale: 2 }).then((canvas) => {
      const img = canvas.toDataURL("image/p|ng");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(img);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <header
      className={`text-center p-4 ${
        dark ? "bg-secondary text-white" : "bg-primary text-white"
      }`}
    >
      <motion.img
        src={image1}
        alt="Profile"
        className="rounded-circle mb-3"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <h1>MELKZEDEK WAFULA W</h1>
      <p className="lead"><bold>Full Stack Developer</bold></p>

      <div className="d-flex justify-content-center mt-3 flex-wrap gap-2">
        <button className="btn btn-light" onClick={toggleTheme}>
          {dark ? "Light Mode" : "Dark Mode" }
        </button>

        <button className="btn btn-warning" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </header>
  );
}
