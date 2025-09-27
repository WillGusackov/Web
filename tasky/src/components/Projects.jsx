// components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section className="card">
      <h2 className="title">Projects</h2>
      <ul>
        <a href="/Overflows_c.pdf" target='_blank' rel="" className="project-link"><li><strong>Buffer Overflows:</strong> 90% </li></a>
        <a href="/Security_breaches.pdf" target='_blank' rel="" className="project-link"><li><strong>Software Vulnerability Breaches :</strong> 85% </li></a>
        <a href="/Threat_modeling.pdf" target='_blank' rel="" className="project-link"><li><strong>Threat Modelling for Secure Software Engineering:</strong> 85%</li></a>
      </ul>
    </section>
  );
}

export default Projects;
