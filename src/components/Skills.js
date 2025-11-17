import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Bootstrap",
    "PHP",
    "MySQL",
    "Git",
    "Next.js",
    "TailwindCSS",
    "Linux",
  ];

  return (
    <motion.section
      className="container my-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <h2 className="mb-4 fw-bold">Skills</h2>

      <div className="d-flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="badge bg-primary p-2 px-3 fs-6">
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
