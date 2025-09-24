// components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section className="card">
      <h2 className="title">Projects</h2>
      <ul>
        <li><strong>SecureAuth:</strong> A multi-factor authentication app using Node.js and WebAuthn.</li>
        <li><strong>PortSniper:</strong> A fast port scanner written in Rust.</li>
        <li><strong>PhishGuard:</strong> An email phishing detection engine with ML.</li>
      </ul>
    </section>
  );
}

export default Projects;
