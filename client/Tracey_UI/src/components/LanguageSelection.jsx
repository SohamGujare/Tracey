import React, { useState } from 'react';

const LanguageSelection = ({ onAnalyze }) => {
  const [codeLanguage, setCodeLanguage] = useState('Python');
  const [translateTo, setTranslateTo] = useState('JavaScript');

  return (
    <div className="language-selection">
      <div className="language-card">
        <label>📝 Code Language</label>
        <select 
          className="language-select" 
          value={codeLanguage}
          onChange={(e) => setCodeLanguage(e.target.value)}
        >
          <option>Python</option>
          <option>JavaScript</option>
          <option disabled>TypeScript (Coming Soon)</option>
        </select>
      </div>
      
      <div className="language-card">
        <label>🌍 Translate To</label>
        <select 
          className="language-select" 
          value={translateTo}
          onChange={(e) => setTranslateTo(e.target.value)}
        >
          <option value="none">None (Debug Only)</option>
          <option>JavaScript</option>
          <option disabled>TypeScript (Coming Soon)</option>
        </select>
      </div>
      
      <div className="language-card">
        <button className="analyze-btn" onClick={onAnalyze}>
          <i className="fas fa-play"></i> Analyze Code
        </button>
      </div>
    </div>
  );
};

export default LanguageSelection;