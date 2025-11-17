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

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Full Stack Intern – Your Brand Mate</h5>
          <p className="card-text">React • Next.js • Node.js</p>
          <ul>
            <li>Developed ecommerce system</li>
            <li>Built carpooling system</li>
            <li>Created leave management system dashboards</li>
            <li>Implemented RESTful APIs</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
