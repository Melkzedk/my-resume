import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="container my-5 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact</h2>

      <p>Email: johndoe@gmail.com</p>
      <p>Phone: +123 456 789</p>

      <div className="mt-3">
        <a href="https://github.com" className="btn btn-dark me-2">
          GitHub
        </a>
        <a href="https://linkedin.com" className="btn btn-primary me-2">
          LinkedIn
        </a>
        <a href="https://twitter.com" className="btn btn-info">
          Twitter
        </a>
      </div>
    </motion.section>
  );
}
