// components/CV.jsx
import React from 'react';

function CV() {
  return (
    <section className="card">
      <h2 className="title">CV</h2>
      <p>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">
          View My CV (PDF)
        </a>
      </p>
    </section>
  );
}

export default CV;
