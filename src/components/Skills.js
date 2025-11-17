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
    "Linux"
  ];

  return (
    <motion.section
      className="container my-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <h2 className="mb-4 fw-bold">Skills</h2>

      <div className="row g-3">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <div className="card text-center shadow-sm p-2 border-0">
              <div className="card-body p-2">
                <h6 className="m-0">{skill}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
