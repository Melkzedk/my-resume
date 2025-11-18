import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = {
    Frontend: [
      { name: "JavaScript", icon: "bi bi-lightning-charge" },
      { name: "React", icon: "bi bi-react" },
      { name: "Next.js", icon: "bi bi-window-stack" },
      { name: "Bootstrap", icon: "bi bi-bootstrap" },
      { name: "TailwindCSS", icon: "bi bi-palette" },
      {name: "HTML5", icon: "bi bi-code-slash" },
    ],
    Backend: [
      { name: "Node.js", icon: "bi bi-server" },
      { name: "PHP", icon: "bi bi-filetype-php" },
      { name: "MongoDB", icon: "bi bi-database" },
      { name: "MySQL", icon: "bi bi-hdd-network" },
      { name: "REST APIs", icon: "bi bi-diagram-3" },
    ],
    Tools: [
      { name: "Git/Git Version", icon: "bi bi-git" },
      { name: "Linux", icon: "bi bi-terminal" },
      { name: "VS Code", icon: "bi bi-code-slash" },
      { name: "Nginx/Apache", icon: "bi bi-wrench" },
      { name: "Docker", icon: "bi bi-box-seam" },
    ],
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="container my-5"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
    >
      <h2 className="mb-4 fw-bold">Skills</h2>

      {Object.keys(categories).map((category, i) => (
        <motion.div
          key={i}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h4 className="mb-3">{category}</h4>

          <div className="d-flex flex-wrap gap-2">
            {categories[category].map((skill, index) => (
              <motion.span
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="badge bg-primary p-2 px-3 fs-6 d-flex align-items-center"
              >
                <i className={`${skill.icon} me-2`}></i>
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
