import React from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import image1 from "../my-resume.jpg";

export default function Header({ dark, toggleTheme }) {

  const downloadPDF = () => {
    const resume = document.body;

    html2canvas(resume).then((canvas) => {
      const img = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(img, "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  return (
    <header className={`text-center p-4 ${dark ? "bg-secondary" : "bg-primary"} text-white`}>
      <motion.img
        src={image1}
        alt="Profile"
        className="rounded-circle mb-3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <h1>MELKZEDEK WAFULA</h1>
      <p className="lead">Full Stack Developer</p>

      <button className="btn btn-light me-2" onClick={toggleTheme}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <button className="btn btn-warning" onClick={downloadPDF}>
        Download PDF
      </button>
    </header>
  );
}
