import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB", "Bootstrap", 'php', 'MySQL', 'Git'];

  return (
    <motion.section
      className="container my-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <h2>Skill</h2>
      <ul className="list-group">
        {skills.map((skill, index) => (
          <li className="list-group-item" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
