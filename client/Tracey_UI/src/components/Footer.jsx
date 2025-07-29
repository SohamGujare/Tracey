import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="#"><i className="fas fa-book"></i> Documentation</a>
        <a href="#"><i className="fab fa-github"></i> GitHub</a>
        <a href="#"><i className="fas fa-code"></i> API</a>
        <a href="#"><i className="fas fa-file-alt"></i> Examples</a>
      </div>
      <p>© 2023 Tracey - AI Code Debugger & Explainer. All rights reserved.</p>
      <p className="footer-desc">Tracey uses Python's AST module and Pyflakes for static analysis. All processing happens securely in your browser.</p>
      
      <div className="tech-stack">
        <div className="tech-item">Python</div>
        <div className="tech-item">JavaScript</div>
        <div className="tech-item">AST</div>
        <div className="tech-item">Pyflakes</div>
        <div className="tech-item">Mermaid.js</div>
      </div>
    </footer>
  );
};

export default Footer;