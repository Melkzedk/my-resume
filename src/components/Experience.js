import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      className="container my-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Experience</h2>

      {/* Full Stack Developer */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Full Stack Developer(FreeLancin)</h5>
          <p className="card-text">React • Next.js • Node.js</p>
          <ul>
            <li>Developed an ecommerce system</li>
            <li>Built a carpooling system</li>
            <li>Created leave management system dashboards</li>
            <li>Implemented RESTful APIs</li>
          </ul>
        </div>
      </div>

      {/* Assistant Consultant */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Assistant Consultant</h5>
          <p className="card-text">ICT Support • Networking • Server Operations</p>
          <ul>
            <li>Provided ICT support to users and resolved technical issues</li>
            <li>Handled networking configurations and maintenance</li>
            <li>Managed servers and ensured system uptime</li>
            <li>Performed regular system backup and monitoring</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
