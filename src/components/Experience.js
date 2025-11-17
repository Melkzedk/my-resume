import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="container my-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-4 fw-bold">Experience</h2>

      <div className="row g-4">

        {/* Full Stack Developer */}
        <div className="col-md-6">
          <motion.div
            className="card shadow-sm border-0 h-100"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-code-slash me-2 text-primary"></i>
                Full Stack Developer (Freelancing)
              </h5>
              <p className="text-muted">2021 – 2024</p>
              <p className="card-text">
                React • Next.js • Node.js • MongoDB • Bootstrap • TailwindCSS
              </p>
              <ul>
                <li>Developed an ecommerce system</li>
                <li>Built a carpooling system</li>
                <li>Created leave management system dashboards</li>
                <li>Implemented RESTful APIs</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Assistant Consultant */}
        <div className="col-md-6">
          <motion.div
            className="card shadow-sm border-0 h-100"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-body">
              <h5 className="card-title d-flex align-items-center">
                <i className="bi bi-person-badge me-2 text-primary"></i>
                Assistant Consultant
              </h5>
              <p className="text-muted">2023 – 2025</p>
              <p className="card-text">ICT Support • Networking • Servers • Backups</p>
              <ul>
                <li>Provided ICT support and resolved technical issues</li>
                <li>Handled networking configurations and maintenance</li>
                <li>Managed servers and ensured uptime</li>
                <li>Performed regular system backups and monitoring</li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
