import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="container my-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
        I am a passionate Full Stack Developer skilled in React, Node.js,
        Next.js, Express,PHP,Mysql and MongoDB.
      </p>
    </motion.section>
  );
}
