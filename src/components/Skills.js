import React from "react";

export default function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "MongoDB", "Bootstrap"];

  return (
    <section className="container my-4">
      <h2>Skills</h2>
      <ul className="list-group">
        {skills.map((skill, index) => (
          <li className="list-group-item" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
