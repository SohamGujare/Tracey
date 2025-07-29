import React from 'react';

const Header = ({ onExport }) => {
  return (
    <header>
      <div className="logo">
        <div className="logo-icon">
          <i className="fas fa-bug"></i>
        </div>
        <div className="logo-text">
          <h1>Tracey</h1>
          <p><span className="status-indicator"></span> AI Code Debugger & Explainer</p>
        </div>
      </div>
      <div className="export-btn">
        <button className="analyze-btn" onClick={onExport}>
          <i className="fas fa-download"></i> Export Results
        </button>
      </div>
    </header>
  );
};

export default Header;